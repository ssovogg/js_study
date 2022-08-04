const $startScreen = document.querySelector("#start-screen");
const $gameMenu = document.querySelector("#game-menu");
const $battleMenu = document.querySelector("#battle-menu");
const $message = document.querySelector("#message");

// hero
const $heroName = document.querySelector("#hero-name");
const $heroLevel = document.querySelector("#hero-level");
const $heroHp = document.querySelector("#hero-hp");
const $heroXp = document.querySelector("#hero-xp");
const $heroAtt = document.querySelector("#hero-att");

// monster
const $monsterName = document.querySelector("#monster-name");
const $monsterHp = document.querySelector("#monster-hp");
const $monsterAtt = document.querySelector("#monster-att");

// 이름 입력 => 게임 시작
let game = null;

$startScreen.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = e.target["name-input"].value;
  game = new Game(name); // 게임 객체 생성
});

class Game {
  constructor(name) {
    // 여기서 받은 name은 start를 거쳐 Hero 클래스에 전달
    this.monster = null;
    this.hero = null;
    this.monsterList = [
      { name: "슬라임", hp: 25, att: 10, xp: 10 },
      { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
      { name: "마왕", hp: 150, att: 35, xp: 50 },
    ];
    this.start(name);
  }
  // 게임 시작 => 화면 전환
  start(name) {
    $gameMenu.addEventListener("submit", this.onGameMenuInput);
    $battleMenu.addEventListener("submit", this.onBattleMenuInput);
    this.changeScreen("game");
    this.hero = new Hero(this.name);
    // => hero 객체에서도 this.game을 통해 게임 객체에 접근 가능
    this.updateHeroStat();
  }
  // 게임 종료
  // 화면 전환
  changeScreen(screen) {
    if (screen === "start") {
      $startScreen.style.display = "block";
      $gameMenu.style.display = "none";
      $battleMenu.style.display = "none";
    } else if (screen === "game") {
      $startScreen.style.display = "none";
      $gameMenu.style.display = "block";
      $battleMenu.style.display = "none";
    } else if (screen === "battle") {
      $startScreen.style.display = "none";
      $gameMenu.style.display = "none";
      $battleMenu.style.display = "block";
    }
  }
  // 일반 메뉴 담당
  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["menu-input"].value;
    if (input === "1") {
      // 모험
      // 함수선언문이면 this는 $gameMenu로 바뀌게 됨
      // 이를 막기 위해 화살표 함수를 사용해 기존 this(Game 객체)를 유지함
      this.changeScreen("battle");
      const randomIndex = Math.floor(Math.random() * this.monsterList.length);
      const rnadomMonster = this.monsterList[randomIndex];
      this.monster = new Monster(
        this,
        rnadomMonster.name,
        rnadomMonster.hp,
        rnadomMonster.att,
        rnadomMonster.xp,
      );
      this.updateMonsterStat();
      this.showMessage(`몬스터와 마주쳤다. ${this.monster.name}인 것 같다!`)
    } else if (input === "2") {
      // 휴식
    } else if (input === "2") {
      // 종료
    }
  };
  // 전투 메뉴 담당
  onBattleMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["menu-input"].value;
    if (input === "1") {
      // 공격
      const { hero, monster } = this;
      hero.attack(monster);
      monster.attack(hero);
      this.showMessage(`${hero.att}의 데미지를 주고 ${monster.att}의 데미지를 받았다.`);
      this.updateHeroStat();
      this.updateMonsterStat();
    } else if (input === "2") {
      // 회복
    } else if (input === "2") {
      // 도망
    }
  };

  // 주인공 stat 화면에 표시
  updateHeroStat() {
    // this로부터 hero 속성을 변수에 구조분해 할당해서 사용
    const { hero } = this;
    if (hero === null) {
      // 주인공이 전사했을 경우, 주인공 정보 삭제
      $heroName.textContent = "";
      $heroLevel.textContent = "";
      $heroHp.textContent = "";
      $heroXp.textContent = "";
      $heroAtt.textContent = "";
      return;
    }
    $heroName.textContent = hero.name;
    $heroLevel.textContent = `Lev : ${hero.lev}`;
    $heroHp.textContent = `Hp : ${hero.hp} / ${hero.maxHp}`;
    $heroXp.textContent = `XP : ${hero.xp} / ${15 * hero.lev}`;
    $heroAtt.textContent = `ATT : ${hero.att}`;
  }

  updateMonsterStat() {
    const { monster } = this;
    if(monster === null){
      $monsterName.textContent = '';
      $monsterHp.textContent = '';
      $monsterAtt.textContent = '';
      return;
    }
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp} / ${monster.maxHp}`;
    $monsterAtt.textContent = `ATT: ${monster.att}`;
  }

  showMessage(text){
    $message.textContent = text;
  }
}

class Hero {
  constructor(game, name) {
    this.game = game; // game 객체에 접근 가능
    this.name = name;
    this.lev = 1;
    this.maxHp = 100;
    this.hp = 100;
    this.xp = 0;
    this.att = 10;
  }
  attack(target) {
    target.hp -= this.att;
  }
  heal(monter) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}

class Monster {
  constructor(game, name, hp, att, xp) {
    this.game = game;
    this.name = name;
    this.maxHp = hp;
    this.hp = hp;
    this.xp = xp;
    this.att = att;
  }
  attack(target) {
    target.hp -= this.att;
  }
}

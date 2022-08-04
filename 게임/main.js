// 주인공 이름 입력 -> 시작버튼 클릭
// 초기화면 -> 일반 메뉴(#game-menu)로 전환
const $startScreen = document.querySelector('#start-screen');
const $gameMenu = document.querySelector('#game-menu');
const $battleMenu = document.querySelector('#battle-menu');
const $message = document.querySelector('#message');

// hero 
const $heroName = document.querySelector('#hero-name');
const $heroLevel = document.querySelector('#hero-level');
const $heroHp = document.querySelector('#hero-hp');
const $heroXp = document.querySelector('#hero-xp');
const $heroAtt = document.querySelector('#hero-att');
const hero = {
  name: '',
  lev: 1,
  maxHp: 100,
  hp: 100, // 0이 되면 게임 종료
  xp: 0, // 일정수준 도달하면 레벨업 -> 체력과 공격력 상승
  att: 10,
  // 객체의 메서드에서는 function 예약어를 생략할 수 있다.
  // this는 기본적으로 window 객체를 가리키지만, 
  // 객체에서 this를 사용할 때는 해당 객체를 가리킨다.
  attack(monster){
    monster.hp -= this.att;
    this.hp -= monster.att;
  },
  heal(monster){
    this.hp += 20;
    this.hp -= monster.att;
  }
}

// 게임시작 -> 게임화면 보여주기
$startScreen.addEventListener('submit', event => {
  event.preventDefault();
  $startScreen.style.display = 'none';
  $gameMenu.style.display = 'block';
  const name = event.target['name-input'].value;
  $heroName.textContent = `용사 : ${name}`;
  $heroLevel.textContent = 'Lev : ' + hero.lev;
  $heroHp.textContent = `HP: ${hero.hp} / ${hero.maxHp}`;
  $heroXp.textContent = `Xp: ${hero.xp} / ${15*hero.lev}`;
  $heroAtt.textContent = `ATT: ${hero.att}`;
})

// monster
const $monsterName = document.querySelector('#monster-name');
const $monsterHp = document.querySelector('#monster-hp');
const $monsterAtt = document.querySelector('#monster-att');
// class 예약어로 클래스 선언
class Monster {
  constructor(name, hp, att, xp){
    this.name = name,
    this.hp = hp,
    this.att = att,
    this.xp = xp,

    // 생성자함수와 달리 객체 생성마다 아래 메서드가 새로 생성되지 않는다.
    // 클래스 문법에서는 한번 만든 메서드는 계속 재사용된다.
    attack(monster){
      monster.hp -= this.att;
      this.hp -= monster.att;
    }
    heal(monster){
      this.hp += 20;
      this.hp -= monster.att;
    }
  }
}
// new 클래스 호출 => constructor 함수 실행, 객체 반환
const monster1 = new Monster('슬라임', 25, 10, 11);
const monster2 = new Monster('스켈레톤', 25, 10, 11);
const monster3 = new Monster('슬라임', 25, 10, 11);
let monster = null;
const monsterList = [
  {name:'슬라임', hp:25, att:10, xp:10},
  {name:'스켈레톤', hp:50, att:15, xp:20},
  {name:'마왕', hp:150, att:35, xp:50},
];

// 게임 메뉴 선택시 이벤트
$gameMenu.addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target['menu-input'].value;
  // input창 포커스 주는 법??
  // 1. 모험 -> 전투화면
  if (input === '1'){
    $gameMenu.style.display = 'none';
    $battleMenu.style.display = 'block';
    // monsterList에서 몬스터 무작위 선택 (문자열=>객체로, 객체=>문자열로 : 깊은 복사(deep copy)
    monster = JSON.parse(
      JSON.stringify(monsterList[Math.floor(Math.random() * monsterList.length)])
    );
    monster.maxHp = monster.Hp;
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp} / ${monster.maxHp}`;
    $monsterAtt.textContent = `ATT: ${monster.att}`;
  } else if (input === '2') {
    $gameMenu.style.display = 'none';
    $battleMenu.style.display = 'block';
  } else if (input === '3') {
    $gameMenu.style.display = 'none';
    $battleMenu.style.display = 'block';
  }
});

// 배틀 메뉴
$battleMenu.addEventListener('submit', e => {
  e.preventDefault();
  const input = e.target['battle-input'].value;
  if(input === '1'){
    hero.attack(monster);
    monster.attack(hero);
    $heroHp.textContent = `HP: ${hero.hp} / ${hero.maxHp}`;
    $monsterHp.textContent = `HP: ${monster.hp} / ${monster.maxHp}`;
    $message.textContent = `${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`
  } else if (input === '2') {

  } else if (input === '3') {

  }
})
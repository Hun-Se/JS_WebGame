const $startScreen = document.querySelector("#start-screen");
const $gameMenu = document.querySelector("#game-menu");
const $battleMenu = document.querySelector("#battle-menu");
const $heroName = document.querySelector("#hero-name");
const $heroLevel = document.querySelector("#hero-level");
const $heroHp = document.querySelector("#hero-hp");
const $heroXp = document.querySelector("#hero-xp");
const $heroAtt = document.querySelector("#hero-att");
const $monsterName = document.querySelector("#monster-name");
const $monsterHp = document.querySelector("#monster-hp");
const $monsterXp = document.querySelector("#monster-xp");
const $monsterAtt = document.querySelector("#monster-att");
const $message = document.querySelector("#message");

class Game {
  constructor(name) {
    this.monster = null;
    this.hero = null;
    this.monsterList = [
      { name: "슬라임", hp: 25, att: 10, xp: 10 },
      { name: "스켈레톤", hp: 50, att: 15, xp: 20 },
      { name: "마왕", hp: 150, att: 35, xp: 50 },
    ];
    this.start(name);
  }

  start(name) {
    $gameMenu.addEventListener("submit", this.onGameMenuInput);
    $battleMenu.addEventListener("submit", this.onBattleMenuinput);
    this.changeScreen("game");
    this.hero = new Hero(this, name);
    this.updateHeroStat();
  }

  changeScreen(screen) {
    if (screen === "start") {
      $startScreen.style.display = "block";
      $gameMenu.style.display = "none";
      $battleMenu.style.display = "nonoe";
    } else if (screen === "game") {
      $startScreen.style.display = "none";
      $gameMenu.style.display = "block";
      $battleMenu.style.display = "nonoe";
    } else if (screen === "battle") {
      $startScreen.style.display = "none";
      $gameMenu.style.display = "none";
      $battleMenu.style.display = "block";
    }
  }

  onGameMenuInput = (event) => {
    event.preventDefault();
    const input = event.target["menu-input"].value;
    if (input === "1") {
      // 1.모험
      this.changeScreen("battle");
      const randomIndex = Math.floor(Math.random() * this.monsterList.length);
      const randomMonster = this.monsterList[randomIndex];
      this.monster = new Monster(
        this,
        randomMonster.name,
        randomMonster.hp,
        randomMonster.att,
        randomMonster.xp
      );
      this.updateMonsterStat();
      this.showMessage(`몬스터와 마주쳤다. ${this.monster.name} 인 것 같다!`);
    } else if (input === "2") {
      // 2.휴식
    } else if (input === "3") {
      // 3.종료
    }
  };

  onBattleMenuinput = (event) => {
    event.preventDefault();
    const input = event.target["battle-input"].value;
    if (input === "1") {
      //공격
      const { hero, monster } = this;
      hero.attack(monster);
      monster.attack(hero);
      if (hero.hp <= 0) {
        this.showMessage(`${hero.lev} level에서 전사, 새주인공을 생성하세요.`);
        this.quit();
      } else if (monster.hp <= 0) {
        this.showMessage(`몬스터를 잡아서 ${monster.xp} 경험치를 얻었습니다.`);
        hero.getXp(monster.xp);
        this.changeScreen("game");
      } else {
        this.showMessage(
          `${hero.att}의 데미지를 주고, ${monster.att}의 데미지를 받았다.`
        );
      }
      this.updateHeroStat();
      this.updateMonsterStat();
    } else if (input === "2") {
      //회복
    } else if (input === "3") {
      //도망
    }
  };

  showMessage(text) {
    $message.textContent = text;
  }

  quit() {
    this.hero = null;
    this.monster = null;
    this.updateHeroStat();
    this.updateMonsterStat();
    $gameMenu.removeEventListener("submit", this.onGameMenuInput);
    $battleMenu.removeEventListener("submit", this.onBattleMenuinput);
    this.changeScreen("start");
    game = null;
  }

  getXp(xp) {
    this.xp += xp;
    if (this.xp >= this.lev * 15) {
      this.xp = this.lev * 15;
      this.lev += 1;
      this.maxHP += 5;
      this.att += 5;
      this.hp = this.maxHP;
      this.game.showMessage(`레벨업! 레벨이 ${this.lev}가 되었습니다.`);
    }
  }

  updateHeroStat() {
    const { hero } = this;
    if (hero === null) {
      $heroName.textContent = "";
      $heroHp.textContent = "";
      $heroXp.textContent = "";
      $heroAtt.textContent = "";
      return;
    }
    $heroName.textContent = hero.name;
    $heroLevel.textContent = `${hero.lev} level`;
    $heroHp.textContent = `HP: ${hero.hp}/ ${hero.maxHp}`;
    $heroXp.textContent = `XP: ${hero.xp} / ${15 * hero.lev}`;
    $heroAtt.textContent = `ATT: ${hero.att}`;
  }

  updateMonsterStat() {
    const { monster } = this;
    if (monster === null) {
      $monsterName.textContent = "";
      $monsterHp.textContent = "";
      $monsterAtt.textContent = "";
      return;
    }
    $monsterName.textContent = monster.name;
    $monsterHp.textContent = `HP: ${monster.hp}/ ${monster.maxHp}`;
    $monsterAtt.textContent = `ATT: ${monster.att}`;
  }
}
class Unit {
  constructor(game, name, hp, att, xp) {
    this.game = game;
    this.name = name;
    this.hp = hp;
    this.att = att;
    this.xp = xp;
  }

  attack(target) {
    target.hp -= this.att;
  }
}
class Hero extends Unit {
  constructor(game, name) {
    super(game, name);
    this.lev = 1;
    this.maxHp = 100;
    this.hp = 100;
    this.xp = 0;
    this.att = 10;
  }

  attack(target) {
    super.attack(target); // 부모 클래스의 attack 메서드를 사용한다.(생략이 가능하지만 학습용을 남겨 놓은것)
    console.log("히어로의 공격!"); // 부모 클래스 attack 외의 동작을 작성 할 수 있다.
  }
  heal(monster) {
    this.hp += 20;
    this.hp -= monster.att;
  }
}

class Monster extends Unit {
  constructor(game, name, hp, att, xp) {
    super(game, name, hp, att, xp);
  }
}

let game = null;
$startScreen.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = event.target["name-input"].value;
  game = new Game(name);
});

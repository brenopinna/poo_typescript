class Player {
  public name: string
  private power: number
  private health: number
  private shield: number

  constructor(name: string, attack: number, life: number, shield: number) {
    this.name = name
    this.power = attack
    this.health = life
    this.shield = shield
  }

  public attack(target: Player) {
    if (this.power > target.shield) {
      target.health -= this.power
    }
  }

  // nao quero que o hp seja alterado manualmente, entao ele eh privado, acessivel
  // somente por outras instancias Plauer
  public get health_points() {
    return this.health
  }
}

const p1 = new Player("P1", 12, 20, 10)
const p2 = new Player("P2", 12, 20, 11)

import { g, config } from '@grafbase/sdk'

enum Fruit {
  Apple,
  Orange
}

const fruit = g.enum("Fruit", Fruit);

const profile = g.type("Profile", {
  address: g.string(),
  favoriteFruit: g.ref(fruit).optional()
})

const user = g.model("User", {
  name: g.string(),
  age: g.int().optional(),
  profile: g.ref(profile).optional(),
  parent: g.relation(() => user).optional(),
})

export default config({ schema: g })
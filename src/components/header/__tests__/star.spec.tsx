import * as React from "react"

import Star from "../star"
import { shallow } from "enzyme"

describe("Star component", () => {
  const screenSize = 800
  let component: any

  beforeAll(() => {
    jest.spyOn(global.Math, "random").mockReturnValue(0.5)

    component = shallow(<Star screenSize={screenSize} />)
  })

  it("renders with the correct styles", () => {
    const svg = component.find("svg")

    const style = svg.prop("style")

    expect(style["height"]).toBe(`0.2rem`)
    expect(style["width"]).toBe(`0.2rem`)
    expect(style["left"]).toBe("400px")
    expect(style["top"]).toBe(`10rem`)
  })

  it("sets animate duration correctly", () => {
    const animate = component.find("animate")

    expect(animate.prop("dur")).toBe("1s")
  })
})

import React from "react"
import { View } from "react-native"

import renderer from "react-test-renderer"

it("renders without crashing", () => {
    const rendered = renderer.create(<View />).toJSON()
    expect(rendered).toBeTruthy()
})

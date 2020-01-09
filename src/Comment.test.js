import React from 'react'
import Comment from './Comment'
import { render } from "enzyme";

it("should render",() => {

  const comment = {
    c : "teste"
  }

  const wrapper = render(<Comment c={comment} />)
  expect(wrapper.text()).toBe("Comentário : teste ")

})
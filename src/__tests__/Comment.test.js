import React from 'react'
import Comment from '../Comment'
import '@testing-library/jest-dom/extend-expect';
import "../setupTests"
import { render } from "enzyme";

it("should render",() => {

  const comment = {
    c : "teste"
  }

  const wrapper = render(<Comment c={comment} />)
  expect(wrapper.text()).toBe("Comentário : teste ")

})
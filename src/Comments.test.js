import React from 'react'
import Comments from './Comments'
import Comment from './Comment'
import { shallow } from 'enzyme'

describe("<Comments /> " , () => {

  it("should render Comments",() => {

    const comments =  [
      {id : "a", c : "ola"},
      {id : "b", c : "hello"}
    ]

    const wrapper = shallow(<Comments comments={comments}/>)

    expect(wrapper.find(Comment).length).toBe(2)

  })

})
import React from 'react';
import ReactShallowrenderer from 'react-test-renderer/shallow';
import Header from '../../components/Header';

test('Should render Header correctly',()=>{
    const renderer = new ReactShallowrenderer();
    renderer.render(<Header />);
    expect(renderer.getRenderOutput()).toMatchInlineSnapshot();
});
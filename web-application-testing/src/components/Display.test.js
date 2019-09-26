import React from 'react';
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react';

import Display from './Display'

import { render, fireEvent, getByTestId} from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Display />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "balls" text', () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.getByText(/balls/i));
});

it('renders "strikes" text', () => {
    const wrapper = rtl.render(<Display />);
    expect(wrapper.getByText(/strikes/i));
});
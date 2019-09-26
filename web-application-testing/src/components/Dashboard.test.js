import React from 'react';
import ReactDOM from 'react-dom'
import * as rtl from '@testing-library/react';

import Dashboard from './Dashboard'

import { render, fireEvent, getByTestId} from "@testing-library/react";

afterEach(rtl.cleanup);

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<Dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders "ball" button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getByText(/ball/i));
});

it('renders "strike" button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getByText(/strike/i));
});

it('renders "hit" button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getByText(/hit/i));
});

it('renders "foul" button', () => {
    const wrapper = rtl.render(<Dashboard />);
    expect(wrapper.getByText(/foul/i));
});
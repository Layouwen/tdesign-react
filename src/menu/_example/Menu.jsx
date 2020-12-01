import React, { useState } from 'react';
import { Menu, MenuItem } from '@tencent/tdesign-react';
export default function BasicUsage() {
  const [active, setActive] = useState('1');
  return (
    <Menu theme="dark" active={active} onChange={(v) => setActive(String(v))}>
      <MenuItem name="1">菜单一</MenuItem>
      <MenuItem name="2">菜单二</MenuItem>
      <MenuItem name="3" disabled>
        菜单三
      </MenuItem>
    </Menu>
  );
}
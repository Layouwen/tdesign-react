import React from 'react';
import { Row, Col } from '@tencent/tdesign-react';

export default function OrderGrid() {
  return (
    <>
      <p>align top</p>
      <Row justify="center" align="top">
        <Col span={4}>
          <div style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 40 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 40 }}>col-4</div>
        </Col>
      </Row>

      <p>Align Middle</p>
      <Row justify="space-around" align="middle">
        <Col span={4}>
          <div style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 40 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 40 }}>col-4</div>
        </Col>
      </Row>

      <p>Align Bottom</p>
      <Row justify="space-between" align="bottom">
        <Col span={4}>
          <div style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 40 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 80 }}>col-4</div>
        </Col>
        <Col span={4}>
          <div style={{ height: 40 }}>col-4</div>
        </Col>
      </Row>
    </>
  );
}
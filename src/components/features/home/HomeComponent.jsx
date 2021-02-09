import React from "react";

import { withRouter, useHistory } from "react-router-dom";

import {
  Layout,
  Typography,
  Carousel,
  Row,
  Col,
  Image,
  Card,
  Divider,
  Form,
  Input,
  Button,
  Tooltip,
  Anchor,
} from "antd";
import { InfoCircleOutlined, NumberOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";

const { Content, Footer } = Layout;
const { Link } = Anchor;
const { Title } = Typography;
const { Meta } = Card;

const style = {
  root: {
    minHeight: "100vh",
  },
  content: {
    marginTop: 20,
  },
  contentStyle: {
    height: "300px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  },
  contentBox: {
    borderRadius: "5px",
    marginBottom: "10px",
    padding: "10px",
    boxShadow: "rgb(158 158 158/ 50%) 0px 2px 8px",
  },
  image: {
    borderRadius: "5px",
  },
  rowContainer: {
    padding: 50,
    borderRadius: 5,
    background: "white",
    marginBottom: 20,
    boxShadow: "rgb(158 158 158) 0px 2px 8px",
  },
  boxContainer: {
    minHeight: "100%",
  },
};

const HomeComponent = () => {
  const history = useHistory();

  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Layout style={style.root}>
      <Carousel autoplay>
        <div>
          <h3 style={style.contentStyle}>Test Slide 1</h3>
        </div>
        <div>
          <h3 style={style.contentStyle}>Test Slide 2</h3>
        </div>
        <div>
          <h3 style={style.contentStyle}>Test Slide 3</h3>
        </div>
      </Carousel>
      <Layout>
        <Content style={style.content}>
          <Divider orientation="left">
            <Title level="h3">Services</Title>
          </Divider>
          <Row span={12} gutter={10} style={style.rowContainer}>
            <Col span={10}>
              <Row style={style.boxContainer}>
                <Row span={24} style={style.contentBox}>
                  <p>
                    Mauris porta a lectus ut rutrum. Vivamus dapibus fringilla
                    enim eget gravida. Suspendisse ac fringilla felis. Etiam
                    rutrum sapien orci, vel suscipit justo congue id. Sed id
                    diam a eros hendrerit convallis non nec purus. Phasellus eu
                    orci id diam rhoncus placerat eu eget mi. Fusce vehicula
                    massa sed odio commodo, eu cursus augue sagittis. Duis
                    consequat, orci vitae cursus posuere, nisl leo pellentesque
                    urna, eu vestibulum diam eros vel lacus. Sed eu molestie
                    libero. Curabitur vulputate lacus a lacus fringilla, et
                    euismod felis facilisis. Nullam maximus dignissim quam et
                    vehicula.
                  </p>
                </Row>
                <Row span={24} style={style.contentBox}>
                  <p>
                    Mauris porta a lectus ut rutrum. Vivamus dapibus fringilla
                    enim eget gravida. Suspendisse ac fringilla felis. Etiam
                    rutrum sapien orci, vel suscipit justo congue id. Sed id
                    diam a eros hendrerit convallis non nec purus. Phasellus eu
                    orci id diam rhoncus placerat eu eget mi. Fusce vehicula
                    massa sed odio commodo, eu cursus augue sagittis. Duis
                    consequat, orci vitae cursus posuere, nisl leo pellentesque
                    urna, eu vestibulum diam eros vel lacus. Sed eu molestie
                    libero. Curabitur vulputate lacus a lacus fringilla, et
                    euismod felis facilisis. Nullam maximus dignissim quam et
                    vehicula.
                  </p>
                </Row>
              </Row>
            </Col>
            <Col span={14} style={style.col}>
              <Row style={style.boxContainer}>
                <Row style={style.contentBox}>
                  <Image
                    src="https://via.placeholder.com/600x150"
                    width="100%"
                    style={style.image}
                  />

                  <Row>
                    <Title level="h4">Lorem Ipsum</Title>
                    <p>
                      Mauris porta a lectus ut rutrum. Vivamus dapibus fringilla
                      enim eget gravida. Suspendisse ac fringilla felis. Etiam
                      rutrum sapien orci, vel suscipit justo congue id. Sed id
                      diam a eros hendrerit convallis non nec purus. Phasellus
                      eu orci id diam rhoncus placerat eu eget mi. Fusce
                      vehicula massa sed odio commodo, eu cursus augue sagittis.
                      Duis consequat, orci vitae cursus posuere, nisl leo
                      pellentesque urna, eu vestibulum diam eros vel lacus. Sed
                      eu molestie libero. Curabitur vulputate lacus a lacus
                      fringilla, et euismod felis facilisis. Nullam maximus
                      dignissim quam et vehicula.
                    </p>
                  </Row>
                </Row>
              </Row>
            </Col>
          </Row>
          <Divider orientation="right">
            <Title level="h3">Quotation</Title>
          </Divider>
          <Row span={24} gutter={10} style={style.rowContainer}>
            <Col span={14}>
              <Row style={style.boxContainer}>
                <Row>
                  <Image
                    src="https://via.placeholder.com/600x150"
                    width="100%"
                    style={style.image}
                  />

                  <Row>
                    <Title level="h4">Lorem Ipsum</Title>
                    <p>
                      Mauris porta a lectus ut rutrum. Vivamus dapibus fringilla
                      enim eget gravida. Suspendisse ac fringilla felis. Etiam
                      rutrum sapien orci, vel suscipit justo congue id. Sed id
                      diam a eros hendrerit convallis non nec purus. Phasellus
                      eu orci id diam rhoncus placerat eu eget mi. Fusce
                      vehicula massa sed odio commodo, eu cursus augue sagittis.
                      Duis consequat, orci vitae cursus posuere, nisl leo
                      pellentesque urna, eu vestibulum diam eros vel lacus. Sed
                      eu molestie libero. Curabitur vulputate lacus a lacus
                      fringilla, et euismod felis facilisis. Nullam maximus
                      dignissim quam et vehicula.
                    </p>
                  </Row>
                </Row>
              </Row>
            </Col>
            <Col span={10}>
              <Row style={style.boxContainer} justify="center" align="middle">
                <Row style={style.contentBox}>
                  <Form
                    form={form}
                    layout="vertical"
                    name="register"
                    onFinish={onFinish}
                    initialValues={{}}
                    scrollToFirstError
                  >
                    <Form.Item
                      name="plateNumber"
                      rules={[
                        {
                          pattern: /[a-z-A-Z]{3}[0-9]{2}[a-z-A-Z-0-9]{1}$/,
                          message: "Formato de placa inválido",
                        },
                        {
                          required: true,
                          message: "Ingresa un número de placa",
                        },
                      ]}
                    >
                      <Input
                        size="large"
                        prefix={<NumberOutlined />}
                        suffix={
                          <Tooltip title="Número de Placa">
                            <InfoCircleOutlined
                              style={{ color: "rgba(0,0,0,.45)" }}
                            />
                          </Tooltip>
                        }
                        placeholder="Número de placa"
                      />
                    </Form.Item>
                    <Anchor>
                      <Link href="#" title="No conozco la placa" />
                    </Anchor>
                    <Form.Item>
                      <Button type="primary" htmlType="submit">
                        Register
                      </Button>
                    </Form.Item>
                  </Form>
                </Row>
              </Row>
            </Col>
          </Row>
          <Divider orientation="left">
            <Title level="h3">Pricing</Title>
          </Divider>
          <Row span={24} justify="center" style={style.rowContainer}>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://via.placeholder.com/240x350"
                  />
                }
              >
                <Meta
                  title="Pricing Card Title"
                  description="Pricing Card Example"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://via.placeholder.com/240x350"
                  />
                }
              >
                <Meta
                  title="Pricing Card Title"
                  description="Pricing Card Example"
                />
              </Card>
            </Col>
            <Col span={5}>
              <Card
                hoverable
                style={{ width: 240 }}
                cover={
                  <img
                    alt="example"
                    src="https://via.placeholder.com/240x350"
                  />
                }
              >
                <Meta
                  title="Pricing Card Title"
                  description="Pricing Card Example"
                />
              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
      <Footer>AgenteMotor ©2021 Created by AGM</Footer>
    </Layout>
  );
};

export default withRouter(HomeComponent);

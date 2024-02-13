import { Col, Row, Input } from 'antd';

import { Link } from 'react-router-dom';
import Heading from '../Heading';
import "./style.css"
const { Search } = Input;

export const Header = () => {

    return (
        <>
       
            <Row>
                <Col span={24} sm={14} offset={1} >
                    <Link to="/" >
                        <Heading level={4} title="Rick and Morty" /></Link>
                </Col>
                <Col span={24} sm={6} offset={1}>

                    <Search
                        placeholder="Search Character..."
                        value={''}
                        enterButton
                        size="large"

                    />
                </Col>
            </Row>
        </>
    )
}

export default Header;
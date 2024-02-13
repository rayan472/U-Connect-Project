
import MainLayout from "../mainLayout";
import CardComponent from "../../component/Card";
import PaginationComponent from "../../component/Pagination";
import { Col, Row } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacters,
  selectedData,
  selectedStatus,
  selectedPagination
} from "../../app/feature/characterSlice";
function HomePage() {
  const dispatch = useDispatch();
  const data = useSelector(selectedData);
  const dataStatus = useSelector(selectedStatus);
  const Pagination = useSelector(selectedPagination)

  useEffect(() => {
    dispatch(fetchCharacters());
  }, []);


  const fetchSingleCharacter = (page = 1) => {
    dispatch(fetchCharacters(page))
  }
  return (
    <MainLayout>
      <Row gutter={[8, 8]}>
        {dataStatus === "loading" ? (
          <p>wait data is loading....</p>
        ) : dataStatus === "failed" ? (
          <p>failed to fatch!</p>
        ) : (
          data?.map((item) => (
            <Col span={4} key={item.id}>
              <CardComponent imageUrl={item.image} title={item.name} />
            </Col>
          ))
        )}
      </Row>
      <Row justify="end">
        <Col span={9}>


          <PaginationComponent
            onChange={(page) => {
    
              fetchSingleCharacter(page)  
            }}
            total={Pagination.count ?? 0}
            pageSize={20}
          />

        </Col>
      </Row>
    </MainLayout>
  );
}

export default HomePage;
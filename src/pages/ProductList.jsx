import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcement from "../components/Announcement"
import Products from "../components/Products"
import Footer from "../components/Footer"
import Newsletter from "../components/Newsletter"

// import { Filter } from "@material-ui/icons"
const Container = styled.div``
const Title = styled.h1`
    margin: 20px;
`
const FilterContainer = styled.div`
    display: flex; 
    justify-content: space-between;
`;
const Filter = styled.div`
    margin: 20px;
    // font-size: 20px;
`
const FilterText = styled.span`
    font-size: 25px;
    font-weight: 600;   
    margin-right: 10px; 
`
const Select = styled.select`
    margin-left: 20px;
    padding: 8px;
`
const Option = styled.option`
    font-size: 16px;
    padding: 5px;

`

const ProductList = () => {
    return (
        <Container>
            <Announcement/>
            <Navbar/>
            <Title>Latest Gadgets</Title>
            <FilterContainer>
                <Filter><FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected>Type</Option>
                        <Option>Mobile</Option>
                        <Option>Laptop</Option>
                        <Option>PC</Option>
                        <Option>TV</Option>
                        <Option>Airpods</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option selected>Newest</Option>
                        <Option selected>Price(ascending)</Option>
                        <Option selected>Price(descending)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products/>
            <Newsletter/>
            <Footer/>
        </Container>
    )

}

export default ProductList
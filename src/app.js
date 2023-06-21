import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { AutoComplete, Input } from 'antd';
import { featchPlaces } from "./actions/placesActions";
import "./app.css";

const App = () => {
  const [options, setOptions] = useState([]);
  const PlacesData = useSelector((state) => state.places.placesData)
  const dispatch= useDispatch();
  
  useEffect(() => {
     dispatch(featchPlaces())
  },[])

  const searchResult = (searchKey) => {
    let filterdata = PlacesData?.filter((data) => data.label.toLowerCase().indexOf(searchKey.toLowerCase()) !== -1);

    filterdata = filterdata.map((data) => {
      return {
        label: data.label,
        value: data.label
      }
    })
    return filterdata
  }
  const handleSearch = (value) => {
   
    setOptions(value ? searchResult(value) : []);
  };
  const onSelect= (selectedValue) => {
    console.log("onSelect",selectedValue)
  } 
 return(
    <div className="center">
    <AutoComplete
    className="w-60"
    options={options}
    onSelect={onSelect}
    onSearch={handleSearch}
  >
    <Input.Search size="large" placeholder="Search Places" enterButton />
  </AutoComplete> </div>);
};
export default App;
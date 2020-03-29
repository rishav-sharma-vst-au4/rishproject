import React from "react";
import { connect } from "react-redux";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shopName: "",
      openingDate: "",
      closingDate: "",
      area: "",
      category: ""
    };
  }

  shopNameOnChange(value) {
    this.setState({ shopName: value });
  }
  openingDateOnChange(value) {
    this.setState({ openingDate: value });
  }
  closingDateOnChange(value) {
    this.setState({ closingDate: value });
  }
  areaOnChange(value){
    this.setState({ area: value });  
  }

  categoryOnChange(value){
    this.setState({ category: value });  
  }

  btnSubmitOnClick(){
  const payload = {
    shopName:this.state.shopName,
    openingDate:this.state.openingDate,
    closingDate:this.state.closingDate,
    area:this.state.area,
    category:this.state.category,
  }
    const action = {type:"ADD_SHOP",payload:payload}
    this.props.submitShop(action);
  }

  render() {
    return (
      <div>
        <span className="m1">
          Shop Name
          <input
            type="text"
            onChange={e => {
              this.shopNameOnChange(e.target.value);
            }}
            value={this.state.shopName}
          />
        </span>
        <span className="m1">
          Area
          <select
          onChange={e => {
            this.areaOnChange(e.target.value);
          }}
          >
            {this.props.areas.map((area, index) => {
              return <option key={index}>{area}</option>;
            })}
          </select>
        </span>
        <span className="m1">
          Category
          <select
          onChange={e => {
            this.categoryOnChange(e.target.value);
          }}
          >

             {this.props.categories.map((category, index) => {
              return <option key={index}>{category}</option>;
            })}
          </select>
        </span>
        <span className="m1">
          Opening Date{" "}
          <input
            type="date"
            onChange={e => {
              this.openingDateOnChange(e.target.value);
            }}
          />
        </span>
        <span className="m1">
          Closing Date{" "}
          <input
            type="date"
            onChange={e => {
              this.closingDateOnChange(e.target.value);
            }}
          />
        </span>
        <button onClick={()=>{this.btnSubmitOnClick()}} className="m1">Submit</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  
  return {
    areas: state.areas,
    categories: state.categories
  };
};

const mapDispatchToProps = dispatch => {
    return {
      submitShop : dispatch
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Form);

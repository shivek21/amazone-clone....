import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider";
import { getBasketTotal } from "../../Reducer/Reducer";
import { useHistory } from "react-router-dom";
import firebase from "firebase";
function Subtotal() {
  const history = useHistory();
  const [{ basket }, dispatch] = useStateValue();
  var user=firebase.auth().currentUser;
  const handleAuthentication=()=>{
    if(user){
      history.push('/payment');
    }
    else{
      history.push('/login');
    }
  }
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the homework */}
              Subtotal ({basket.length} items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} // Part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rs"}
      />

      <button onClick={handleAuthentication}>Proceed To Checkout</button>
    </div>
  );
}

export default Subtotal;
import React from 'react';
import * as classes from './PickupCardDetails.module.css';

const pickupCardDetails = props => {
    console.log('DETAILS', props);
    let display = null;
    if(props.changed){
        display = props.showDetail.deliveryTimes.map((delivery,i) => {
            return(
                <div>
                    <div className={classes.DetailWrapper} key={`delivery-details-${i}`}>
                        <p>Pickup: {delivery.pickupTime}</p>
                        <p>Amount: {delivery.amountPerDelivery}</p>
                    </div>
                    <div className={classes.DetailWrapper} key={`delivery-details-${i}`}>     
                        <p>Delivery: {delivery.deliveryTime}</p>
                    </div>
                    <hr></hr>
                </div>
            );
        });
       
    }else{
        display = null;
    }

    return (
        <div>
            <hr></hr>
            {display}
        </div>
    );
};

export default pickupCardDetails;

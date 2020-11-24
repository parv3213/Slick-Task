import React from "react";

export default function Landing() {
    return (
        <div>
            <div className="row">
                <div className="card col-lg mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Step 1</h5>
                        <p className="card-text text-muted">Connect to your wallet</p>
                    </div>
                </div>
                <div className="card col-lg mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Step 2</h5>
                        <p className="card-text text-muted">Pick the NFT to be listed</p>
                    </div>
                </div>
                <div className="card col-lg mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Step 3</h5>
                        <p className="card-text text-muted">Choose the number of tokens to be generated</p>
                    </div>
                </div>
                <div className="card col-lg mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Step 4</h5>
                        <p className="card-text text-muted">Choose the base price of each</p>
                    </div>
                </div>
                <div className="card col-lg mx-3" style={{ width: "18rem" }}>
                    <div className="card-body">
                        <h5 className="card-title">Step 5</h5>
                        <p className="card-text text-muted">List on Uniswap</p>
                    </div>
                </div>
            </div>

            <div className="my-5 d-flex justify-content-center">
                <button type="button" className="btn btn-secondary">View all the listings</button>
            </div>
        </div>
    );
}

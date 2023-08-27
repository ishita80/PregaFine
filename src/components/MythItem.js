import React from 'react'

export default function MythItem(props) {
  return (
    <div>
        <div className="mt-5 px-3 py-2 rounded-5" style={{backgroundColor: "rgb(13 140 253 / 91%)", border: "#0a4498 solid 4px"}}>
                    <h2 className="px-3 text-decoration-underline fw-bold" style={{ color: 'white' }}>Myth #{props.index}</h2>
                    <div className="d-flex my-3 justify-content-center">
                        <img src={props.imgUrl} className="img-fluid border border-2" style={{ width: '40%', height: '50%'}} alt="" />
                    </div>
                    <div className="row fs-5">
                        <div className="col-6 justify-content-around">
                            <div className="flex-wrap">
                                <h3 className="" style={{ color: 'white' }}>Myth: {props.myth}</h3>
                                <p>{props.mythContent}</p>
                            </div>
                        </div>
                        <div className="col-6 justify-content-around">
                            <div className="flex-wrap">
                                <h3 className="" style={{ color: 'white' }}>Fact: {props.fact}</h3>
                                <p>{props.factContent}</p>
                            </div>

                        </div>
                    </div>

                </div>
      
    </div>
  )
}

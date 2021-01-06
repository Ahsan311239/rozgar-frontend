import React from "react";
import bannerImg from "./../assets/img/body-bg.jpg";


function CreateWorker() {  

  return (
    <div className="create-worker-page">
        <div className="back_img vh-100 overflow-y-scroll" style={{ backgroundImage: `url(${bannerImg})` }} >
            <div className="row w-100 pl-10 pt-4">
                <div className="col-md-6 bg-white py-4 px-3 rounded">
                    <form action="" className="">
                        <h4>Check video</h4>
                            <div className="form-video mb-4">
                                <iframe width="100%" height="350" src="https://www.youtube.com/embed/35lXWvCuM8o" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                        <h4 className="mb-3">Create worker Form</h4>
                        {/* <label htmlFor="">Enter your name: </label> */}
                        <input type="text" placeholder="اپنا نام یہاں لکھیں" className="form-control rounded-0 mb-2"/>
                        <div className="row">
                            <div className="col-6 pr-1">
                                <input type="text" placeholder="اپنا نام یہاں لکھیں" className="form-control rounded-0  mb-2"/>
                            </div>
                            <div className="col-6 pl-1">
                                <input type="text" placeholder="اپنا نام یہاں لکھیں" className="form-control rounded-0  mb-2"/>
                            </div>
                        </div>
                        <input type="text" placeholder="اپنا نام یہاں لکھیں" className="form-control rounded-0 mb-2"/>
                        <input type="text" placeholder="اپنا نام یہاں لکھیں" className="form-control rounded-0 mb-2"/>
                        <input type="text" placeholder="اپنا نام یہاں لکھیں" className="form-control rounded-0 mb-3"/>

                        <a href="" className="btn btn-block rounded-0 bg-pri text-white">Create Worker</a>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}

export default CreateWorker;

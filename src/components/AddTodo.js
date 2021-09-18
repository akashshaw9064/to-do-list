import React from 'react'
import { useState } from 'react';

export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        addTodo(title,desc);
    }
    return (
        <div className="container mx-5 mt-5">
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add To-Do Item
            </button>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title text-primary"  id="exampleModalLabel">Add Your To-Do task</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form onSubmit={submit}>
                    <div className="modal-body">
                            <div className="form-group m-1">
                                <label htmlFor="title1">Title</label>
                                <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title1" aria-describedby="titleHelp" placeholder="Enter title" required/>
                            </div>
                            <div className="form-group m-1">
                                <label htmlFor="desc">Description</label>
                                <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" placeholder=" Enter description" required/>
                            </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Add</button>
                    </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
    )
}

"use client"
import { AuthContext } from "@/Providers/AuthProvider";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { FaUtensils } from "react-icons/fa";
import Swal from "sweetalert2";

const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const { user } = useContext(AuthContext);
  const router = useRouter()
  if(!user){
    router.push('/login')
  }

  const onSubmit = async (data) => {
    console.log(data);
   
      const orderItem = {
        totalOrder: data.totalOrder,
        totalItem: data.totalItem,
        totalTransfer: data.totalTransfer,
        totalReceive: data.totalReceive,
        totalPaymentAmount: data.totalPaymentAmount,
        totalCustomer: data.totalCustomer,
        averageCostPerOrder: data.averageCostPerOrder,
        averageProfitPerOrder: data.averageProfitPerOrder,
        averageRevenewPerOrder: data.averageRevenewPerOrder,
        totalEmployeePayment: data.totalEmployeePayment,
        createBy: data.createBy,
      };

    
      const orderRes = await axios.post("http://localhost:5000/orders", orderItem)
      console.log(orderRes.data);
      if (orderRes.data.insertId) {
        //show success popup
        console.log(orderRes.data.insertId)
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Orders Added Successfully !`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
  
  return (
    <div>
      {/* <SectionTitle
        heading={"Add an item"}
        subHeading={"What's new? "}
      ></SectionTitle> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-2 gap-x-4">
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Order</span>
          </label>
          <input
            type="text"
            placeholder="Total Order"
            {...register("totalOrder", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Item</span>
          </label>
          <input
            type="text"
            placeholder="Total Item"
            {...register("totalItem", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Transfer</span>
          </label>
          <input
            type="text"
            placeholder="Total Transfer"
            {...register("totalTransfer", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Receive</span>
          </label>
          <input
            type="text"
            placeholder="Total Receive"
            {...register("totalReceive", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Payment Amount</span>
          </label>
          <input
            type="text"
            placeholder="Total Payment Amount"
            {...register("totalPaymentAmount", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Customer</span>
          </label>
          <input
            type="text"
            placeholder="Total Customer"
            {...register("totalCustomer", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Average Cost Per Order</span>
          </label>
          <input
            type="text"
            placeholder="Average Cost Per Order"
            {...register("averageCostPerOrder", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Average Profit Per Order</span>
          </label>
          <input
            type="text"
            placeholder="Average Profit Per Order"
            {...register("averageProfitPerOrder", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Average Revenew Per Order</span>
          </label>
          <input
            type="text"
            placeholder="Average Revenew Per Order"
            {...register("averageRevenewPerOrder", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Total Employee Payment</span>
          </label>
          <input
            type="text"
            placeholder="Total Employee Payment"
            {...register("totalEmployeePayment", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
       
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Create by</span>
          </label>
          <input
            type="text"
            placeholder="Create by"
            {...register("createBy", { required: true })}
            className="input input-bordered w-full"
          />
        </div>
       
        <div className="text-center mt-6">
        <button className="btn btn-primary w-1/3">
          Add Orders<FaUtensils className="text-lg"></FaUtensils>
        </button>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;

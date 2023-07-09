import Button from "./Button"
import Input from "./Input"

import { useForm } from 'react-hook-form'
import { server_calls } from "../api/server"
import { useDispatch, useStore } from "react-redux"
import { chooseBrand, chooseLocation, chooseName, choosePrice } from "../redux/slices/RootSlices"

interface WhiskeyFormProps {
  id?: string[]
}

const WhiskeyForm = ( props:WhiskeyFormProps) => {
  const { register, handleSubmit } = useForm({})
  const dispatch = useDispatch();
  const store = useStore();

  const onSubmit = (data: any, event: any) => {
    console.log(`ID: ${typeof props.id}`);
    console.log(props.id)
    console.log(data)
    if (props.id && props.id.length > 0) {
      server_calls.update(props.id[0], data)
      console.log(`Updated: ${ data.whiskey_name } ${ props.id }`)
      setTimeout(() => { window.location.reload() }, 5000);
      event.target.reset()
    } else {
      dispatch(chooseName(data.whiskey_name));
      dispatch(chooseBrand(data.whiskey_brand));
      dispatch(chooseLocation(data.whiskey_location));
      dispatch(choosePrice(data.whiskey_price));

      server_calls.create(store.getState())
      setTimeout(() => { window.location.reload() }, 5000);

    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="whiskey_name">Whiskey Name</label>
          <Input {...register('whiskey_name')} name='whiskey_name' placeholder="Name of Whiskey" />
        </div>
        <div>
          <label htmlFor="whiskey_brand">Whiskey Brand</label>
          <Input {...register('whiskey_brand')} name='whiskey_brand' placeholder="Brand of Whiskey" />
        </div>
        <div>
          <label htmlFor="whiskey_location">Whiskey Location</label>
          <Input {...register('whiskey_location')} name='whiskey_location' placeholder="Whiskey Location" />
        </div>
        <div>
          <label htmlFor="whiskey_price">Whiskey Price</label>
          <Input {...register('whiskey_price')} name='whiskey_price' placeholder="Whiskey Price" />
        </div>
        <div className="flex p-1">
          <Button className="flex justify-start m-3 bg-slate-300 p-2 rounded hover:bg-slate-800 text-white"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  )
}

export default WhiskeyForm
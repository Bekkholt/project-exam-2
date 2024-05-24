import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import * as S from "./index.styles";
import { Link } from "react-router-dom";

const URL = "https://v2.api.noroff.dev/holidaze/venues";

const schema = yup.object({
  image: yup.string().url().optional(),
  name: yup.string().required(),
  address: yup.string().optional(),
  city: yup.string().optional(),
  zip: yup.string().optional(),
  country: yup.string().optional(),
  description: yup.string().required(),
  price: yup.number().required(),
  guests: yup.number().required(),
  wifi: yup.bool().optional(),
  parking: yup.bool().optional(),
  breakfast: yup.bool().optional(),
  pets: yup.bool().optional(),
});

export default function CreateVenue() {
  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      image: e.target.image.value,
      name: e.target.name.value,
      address: e.target.address.value,
      city: e.target.city.value,
      zip: e.target.zip.value,
      country: e.target.country.value,
      description: e.target.description.value,
      price: e.target.price.value,
      guests: e.target.guests.value,
      wifi: e.target.wifi.checked,
      parking: e.target.parking.checked,
      breakfast: e.target.breakfast.checked,
      pets: e.target.pets.checked,
    };

    try {
      const Details = {
        media: [
          {
            url: formData.image,
          },
        ],
        name: formData.name,
        location: {
          address: formData.address,
          city: formData.city,
          zip: formData.zip,
          country: formData.country,
        },
        description: formData.description,
        price: Number.parseInt(formData.price),
        maxGuests: Number.parseInt(formData.guests),
        meta: {
          wifi: formData.wifi,
          parking: formData.parking,
          breakfast: formData.breakfast,
          pets: formData.pets,
        },
      };

      const AccessToken = localStorage.getItem("accessToken");
      const Key = localStorage.getItem("key");

      const data = {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${AccessToken}`,
          "X-Noroff-API-Key": Key,
        },
        body: JSON.stringify(Details),
      };
      const response = await fetch(URL, data);
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (response.status === 201) {
        alert(`Venue posted`);
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (e) {
      console.log({ e });
      alert(e.errors.join("\n"));
    }
  }

  return (
    <S.Wrapper>
      <S.VenueForm onSubmit={handleSubmit}>
        <S.TopCard>
          <S.Title className="header">Create venue</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.Insert placeholder="Image url" {...register("image")} type="url" />
          <S.Insert placeholder="Venue name*" {...register("name")} />
          <S.Insert placeholder="Address" {...register("address")} />
          <S.Insert placeholder="City" {...register("city")} />
          <S.Insert placeholder="Zip" {...register("zip")} />
          <S.Insert placeholder="Country" {...register("country")} />
          <S.DescriptionInsert
            placeholder="Description*"
            {...register("description")}
            type="text"
          />
          <S.Insert
            placeholder="Price pr/night*"
            {...register("price")}
            type="number"
          />
          <S.Insert
            placeholder="Max guests*"
            {...register("guests")}
            type="number"
          />
        </S.InsertDiv>
        <S.InsertDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" {...register("wifi")} />
            <S.Text>Wifi</S.Text>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" {...register("parking")} />
            <S.Text>Parking</S.Text>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" {...register("breakfast")} />
            <S.Text>Breakfast</S.Text>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert type="checkbox" {...register("pets")} />
            <S.Text>Pets</S.Text>
          </S.CheckboxDiv>
        </S.InsertDiv>
        <S.BottomCard>
          <S.InsertDiv>
            <S.Button className="header" type="submit">
              Publish venue
            </S.Button>
            <Link to={"../../Pages/Bookings"}>
              <S.Button className="header">Go back</S.Button>
            </Link>
          </S.InsertDiv>
        </S.BottomCard>
      </S.VenueForm>
    </S.Wrapper>
  );
}

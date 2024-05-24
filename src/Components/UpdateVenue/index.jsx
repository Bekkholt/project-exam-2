import * as S from "./index.styles";
import { Link, useNavigate, useParams } from "react-router-dom";
import FetchMyVenue from "../../Hooks/SpecificVenueAPI";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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

export default function UpdateVenue() {
  let { id } = useParams();
  const venuesUrl = `https://v2.api.noroff.dev/holidaze/venues/${id}`;
  const venue = FetchMyVenue(venuesUrl);
  const navigate = useNavigate();

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
        method: "PUT",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${AccessToken}`,
          "X-Noroff-API-Key": Key,
        },
        body: JSON.stringify(Details),
      };
      const response = await fetch(venuesUrl, data);
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        alert(`Venue updated`);
        navigate("../../Pages/Bookings");
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (e) {
      alert(e.errors.join("\n"));
    }
  }

  async function deleteVenue() {
    try {
      const AccessToken = localStorage.getItem("accessToken");
      const Key = localStorage.getItem("key");

      const data = {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${AccessToken}`,
          "X-Noroff-API-Key": Key,
        },
      };
      const response = await fetch(venuesUrl, data);

      if (response.status === 204) {
        alert(`Venue deleted`);
        navigate("../../Pages/Bookings");
        return <></>;
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (error) {
      return error;
    }
  }

  if (!venue.venue) return <></>;

  return (
    <S.Wrapper>
      <S.UpdateForm key={venue.venue.id} onSubmit={handleSubmit}>
        <S.TopCard>
          <S.Title className="header">Update venue</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.Insert
            placeholder={venue.venue.media[0].url}
            defaultValue={venue.venue.media[0].url}
            type="url"
            {...register("image")}
          />
          <S.Insert
            placeholder={venue.venue.name}
            defaultValue={venue.venue.name}
            {...register("name")}
          />
          <S.Insert
            placeholder={venue.venue.location.address}
            defaultValue={venue.venue.location.address}
            {...register("address")}
          />
          <S.Insert
            placeholder={venue.venue.location.city}
            defaultValue={venue.venue.location.city}
            {...register("city")}
          />
          <S.Insert
            placeholder={venue.venue.location.zip}
            defaultValue={venue.venue.location.zip}
            {...register("zip")}
          />
          <S.Insert
            placeholder={venue.venue.location.country}
            defaultValue={venue.venue.location.country}
            {...register("country")}
          />
          <S.DescriptionInsert
            placeholder={venue.venue.description}
            defaultValue={venue.venue.description}
            type="text"
            {...register("description")}
          />
          <S.Insert
            placeholder={venue.venue.price}
            defaultValue={venue.venue.price}
            type="number"
            {...register("price")}
          />
          <S.Insert
            placeholder={venue.venue.maxGuests}
            defaultValue={venue.venue.maxGuests}
            type="number"
            {...register("guests")}
          />
        </S.InsertDiv>
        <S.InsertDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={venue.venue.meta.wifi}
              {...register("wifi")}
            />
            <S.Text>Wifi</S.Text>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={venue.venue.meta.parking}
              {...register("parking")}
            />
            <S.Text>Parking</S.Text>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={venue.venue.meta.breakfast}
              {...register("breakfast")}
            />
            <S.Text>Breakfast</S.Text>
          </S.CheckboxDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={venue.venue.meta.pets}
              {...register("pets")}
            />
            <S.Text>Pets</S.Text>
          </S.CheckboxDiv>
        </S.InsertDiv>
        <S.BottomCard>
          <S.InsertDiv>
            <S.Button className="header" type="submit">
              Update venue
            </S.Button>
            <S.Button className="header" onClick={deleteVenue}>
              Delete venue
            </S.Button>
            <Link to={"../../Pages/Bookings"}>
              <S.Button className="header">Go back</S.Button>
            </Link>
          </S.InsertDiv>
        </S.BottomCard>
      </S.UpdateForm>
    </S.Wrapper>
  );
}

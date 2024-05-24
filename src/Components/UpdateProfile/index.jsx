import FetchMyProfile from "../../Hooks/MyProfileAPI";
import * as S from "./index.styles";
import { Link } from "react-router-dom";
import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  avatar: yup.string().url().optional(),
  bio: yup.string().required(),
  manager: yup.bool().optional(),
});

export default function UpdateProfile() {
  const name = localStorage.getItem("name");
  const ProfileUrl = `https://v2.api.noroff.dev/holidaze/profiles/${name}`;
  const profile = FetchMyProfile(ProfileUrl);

  const { register } = useForm({
    resolver: yupResolver(schema),
  });

  async function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      avatar: e.target.avatar.value,
      bio: e.target.bio.value,
      manager: e.target.venueManager.checked,
    };

    try {
      const Details = {
        avatar: {
          url: formData.avatar,
        },
        bio: formData.bio,
        venueManager: formData.manager,
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
      const response = await fetch(ProfileUrl, data);
      console.log(response);
      const json = await response.json();
      console.log(json);
      if (response.status === 200) {
        alert(`Profile updated`);
      } else {
        alert(`Something went wrong. Statuscode: ` + response.status);
      }
    } catch (e) {
      console.log({ e });
      alert(e.errors.join("\n"));
    }
  }

  if (!profile.profile) return <></>;

  return (
    <S.Wrapper>
      <S.UpdateForm key={profile.profile.id} onSubmit={handleSubmit}>
        <S.TopCard>
          <S.Title className="header">Update profile</S.Title>
        </S.TopCard>
        <S.InsertDiv>
          <S.Insert
            placeholder="Avatar image url"
            defaultValue={profile.profile.avatar.url}
            type="url"
            {...register("avatar")}
          />
          <S.DescriptionInsert
            placeholder="Write a bio"
            defaultValue={profile.profile.bio}
            {...register("bio")}
          />
        </S.InsertDiv>
        <S.InsertDiv>
          <S.CheckboxDiv>
            <S.Insert
              type="checkbox"
              defaultChecked={profile.profile.venueManager}
              {...register("venueManager")}
            />
            <S.Text>I am a venue manager</S.Text>
          </S.CheckboxDiv>
        </S.InsertDiv>
        <S.BottomCard>
          <S.InsertDiv>
            <S.Button className="header" type="submit">
              Update profile
            </S.Button>
            <Link to={"../../Pages/Profilepage"}>
              <S.Button className="header">Go back</S.Button>
            </Link>
          </S.InsertDiv>
        </S.BottomCard>
      </S.UpdateForm>
    </S.Wrapper>
  );
}

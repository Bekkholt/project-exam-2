import { useEffect, useState } from "react";

const name = localStorage.getItem("name");

const url = "https://v2.api.noroff.dev/holidaze/profiles/" + name;

export default function FetchMyProfile() {
  const [profile, setProfile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        setIsLoading(true);
        setIsError(false);
        const accessToken = localStorage.getItem("accessToken");
        const APIkey = localStorage.getItem("key");
        const data = {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${accessToken}`,
            "X-Noroff-API-Key": APIkey,
          },
        };
        const response = await fetch(url, data);
        const json = await response.json();
        console.log(json);
        setProfile(json.data);
      } catch (error) {
        console.log(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    getData();
  }, []);

  return { profile, isLoading, isError };
}

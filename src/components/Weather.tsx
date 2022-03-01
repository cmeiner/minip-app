import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { loadImage } from "../loadImage";
import { WeatherFetcher } from "../WeatherFetcher";

interface WeatherProps {
  city: {
    weather: string;
    temperature: string;
    wind: number;
    name: string;
    url: string;
    deg: number;
  };
}

export function Weather(props: WeatherProps) {
  return (
    <div>
      <div className="card w-96 bg-neutral shadow-xl mx-auto text-white mt-2">
        <figure className="px-10 pt-10">
          <img
            srcSet={props.city.url}
            alt="Weather Image"
            className="rounded-xl card-image"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{props.city.name}</h2>
          <p>Weather: {props.city.weather}</p>
          <p>Temperature: {props.city.temperature}</p>
          <p>
            Windspeed:{" "}
            <FontAwesomeIcon
              style={{ transform: `rotate(${props.city.deg}deg)` }}
              icon={faArrowDown}
            />{" "}
            {props.city.wind} m/s
          </p>
          <div className="card-actions">
            <button className="btn btn-ghost">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

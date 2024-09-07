import { h } from "preact";
import type { Token } from "../token";
import { errorView, infoContainer, infoDescription, infoView, termLine } from "./styles.css";

export type TokenDisplayProps = {
  token: Token,
};

const genSetup = (token: string) =>
  <div>
    <pre>
      <span class={termLine}>wget {window.location.origin}/cloud.lua</span>
      {"\n"}
      <span class={termLine}>cloud.lua {token}</span>
    </pre>
  </div>;


export const TokenDisplay = ({ token }: TokenDisplayProps) =>
  <div class={infoContainer}>
    <div class={infoView}>
      <h2>Давайте почнемо!</h2>
      {genSetup(token)}
    </div>
    <div class={infoDescription}>
      <h3>Я почати користуватись?</h3>
      <p>
        1. Скопіюйте ці дві команди в термінал комп'ютера або робота.
      </p>
      <p>
        2. Перша команда завантажить програму, а друга запустить її. 
      </p>
      <p>
        3. Насолоджуйтесь!
      </p>
    </div>
  </div>;

export type LostConnectionProps = {
  token: Token,
};

export const LostConnection = ({ token }: LostConnectionProps) =>
  <div class={infoContainer}>
    <div class={infoView}>
      <h2>З'єднання втрачено</h2>
      <p>Ми втратили зв'язок з сервером. Спробуйте перезавантажити сторінку.</p>
      {genSetup(token)}
    </div>
  </div>;

export type UnknownErrorProps = {
  error: string,
};

export const UnknownError = ({ error }: UnknownErrorProps) =>
  <div class={infoContainer}>
    <div class={`${infoView} ${errorView}`}>
      <h2>Сталася помилка</h2>
      <pre>{error}</pre>
    </div>
  </div>;

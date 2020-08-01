module Main exposing (main)

import Browser
import Html exposing (Html, h1, text, button, div)
import Html.Events exposing (onClick)
import Css exposing (tw)
import Material.Icons exposing (add)
-- import Html.Attributes exposing (..)

type Update = Increment | Decrement

type alias Msg = Update
type alias Model = Int

view : Model -> Html Msg
view model =
  div
    [ tw "container"
    , tw "h-full"
    , tw "flex", tw "flex-col", tw "justify-center"
    , tw "items-center"
    ]
    [ h1 [ tw "text-6xl" ] [ text (String.fromInt model) ]
    , div
      [ tw "flex", tw "flex-row", tw "justify-around"
      ]
      [ button [ onClick Decrement, Css.btn "blue", tw "m-2" ] [ text "Dec" ]
      , button [ onClick Increment, Css.btn "green", tw "m-2" ] [ text "Inc" ]
      ]
    ]

update : Msg -> Model -> Model
update action model =
  case action of
    Increment ->
      model + 1
    Decrement ->
      model - 1

state : Model
state = 0

main : Program () Model Msg
main = Browser.sandbox { init = state, update = update, view = view}

defmodule Server.Router do
  use Plug.Router
  use Plug.Debugger
  require Repo
  require Logger

  plug(Plug.Logger, log: :debug)
  plug(:match)
  plug(:dispatch)

  get "/messages" do
    send_resp(conn, 200, Poison.encode!(%{"messages" => Repo.get_messages(Messages)}))
  end

  post "/message" do
    {:ok, body, conn} = read_body(conn)

    body = Poison.decode!(body)

    IO.inspect(body)
    Repo.add_message(Messages, get_in(body, ["message"]))

    send_resp(conn, 201, "created: #{get_in(body, ["message"])}")
  end

  get "/message/:index" do
    send_resp(conn, 200, Poison.encode!(%{"message" => Repo.find_message(Messages, index)}))
  end

  match _ do
    send_resp(conn, 404, "not found")
  end
end

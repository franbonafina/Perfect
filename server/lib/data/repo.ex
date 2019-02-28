defmodule Repo do
  use Agent

  def start_link(initial_value) do
    IO.puts("starting the repo")
    Agent.start_link(fn -> initial_value end, name: Messages)
  end

  def add_message(pid, message) do
    Agent.update(pid, fn(state) ->
      [message | state]
    end)
  end

  def get_messages(pid) do
    Agent.get(pid, fn(state) ->
      state
    end)
  end

  def find_message(pid, index) do
    Agent.get(pid, fn(state) ->
      List.keyfind(state, List.to_integer(index), 0)
    end)
  end

end

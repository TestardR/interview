import pytest
from compute import _compute, compute_data
import requests

from .fixture_data import (films, films_without_people, people,
                           people_without_films)

""" To avoid false negative test. we skip test if a
ConnectionError is raised. Thus, to avoid false negatives """


@pytest.mark.xfail(raises=requests.exceptions.ConnectionError)
@pytest.mark.parametrize("films,people", [(films, people), (films_without_people, people), (films, people_without_films), (films_without_people, people_without_films)])
def test__compute(films, people):
    expected = _compute(films, people)

    assert type(expected) is dict
    assert type(
        list(expected["2baf70d1-42bb-4437-b551-e5fed5a87abe"].values())[0]) is str
    assert type(
        list(expected["2baf70d1-42bb-4437-b551-e5fed5a87abe"].values())[1]) is list

    for person in expected["2baf70d1-42bb-4437-b551-e5fed5a87abe"]["persons"]:
        if "Sosuke" == person["name"]:
            assert True

    assert len(films) == len(expected)

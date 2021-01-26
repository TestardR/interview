from compute import compute_data
from .fixture_data import films, people


def test_compute_data():
    expected = compute_data(films, people)

    assert type(expected) is dict
    assert type(
        list(expected["2baf70d1-42bb-4437-b551-e5fed5a87abe"].values())[0]) is str
    assert type(
        list(expected["2baf70d1-42bb-4437-b551-e5fed5a87abe"].values())[1]) is list

    for person in expected["2baf70d1-42bb-4437-b551-e5fed5a87abe"]["persons"]:
        if "Sosuke" == person["name"]:
            assert True

    assert len(films) == len(expected)

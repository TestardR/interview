from utils import get_data
from .fixture_data import films, people

def test_get_data():
    expected_films = get_data('films')
    expected_people = get_data('people')

    assert expected_films[0]['id'] == films[0]['id']
    assert expected_people[0]['id'] == people[0]['id']
"""Backend API smoke tests for SK Sweets marketing site (only /api/ boilerplate)."""
import os
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "https://premium-sweets-dev.preview.emergentagent.com").rstrip("/")


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# Health check for the boilerplate hello endpoint
class TestHealth:
    def test_root_returns_hello(self, api_client):
        r = api_client.get(f"{BASE_URL}/api/", timeout=10)
        assert r.status_code == 200
        data = r.json()
        assert data.get("message") == "Hello World"


# Status CRUD tests (boilerplate endpoints, not used by site UI)
class TestStatus:
    def test_create_and_list_status(self, api_client):
        payload = {"client_name": "TEST_pytest_client"}
        c = api_client.post(f"{BASE_URL}/api/status", json=payload, timeout=10)
        assert c.status_code == 200
        created = c.json()
        assert created["client_name"] == "TEST_pytest_client"
        assert "id" in created and isinstance(created["id"], str)

        g = api_client.get(f"{BASE_URL}/api/status", timeout=10)
        assert g.status_code == 200
        items = g.json()
        assert isinstance(items, list)
        assert any(i.get("id") == created["id"] for i in items)

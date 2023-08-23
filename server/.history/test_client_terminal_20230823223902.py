import time
import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support import expected_conditions as EC

@pytest.fixture(scope="session")
def driver(request):
    driver = webdriver.Chrome()
    driver.implicitly_wait(10)
    driver.maximize_window()
    request.addfinalizer(driver.quit)
    return driver

def test_terminal_input(driver):
    driver.get("http://localhost:3000/")
    input_field = driver.find_element(By.ID, "command-input")
    input_field.send_keys("dir")
    
    # time.sleep(2)
    assert input_field.get_attribute("value") == "dir"

    
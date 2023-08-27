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
    
    assert input_field.get_attribute("value") == "dir"

def test_terminal_output(driver):
    driver.get("http://localhost:3000/")
    input_field = driver.find_element(By.ID, "command-input")
    input_field.send_keys("help")
    input_field.submit()

    assert EC.text_to_be_present_in_element((By.ID, "terminal-output"), "help")
    assert EC.text_to_be_present_in_element((By.ID, "terminal-output"), "For more information on a specific command, type HELP command-name")


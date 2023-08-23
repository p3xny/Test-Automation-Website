import os
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

def test_selenium_button(driver):
    driver.get("http://localhost:3000/")
    button = driver.find_element(By.ID, "test-button-selenium-menu")
    button.click()
    
    button_test1 = driver.find_element(By.XPATH, f"//*[contains(text(), 'Selenium Full Test')]")
    button_test2 = driver.find_element(By.XPATH, f"//*[contains(text(), 'Selenium Buttons Test')]")
    button_test3 = driver.find_element(By.XPATH, f"//*[contains(text(), 'Selenium Terminal Test')]")
    
    # time.sleep(2)
    assert button_test1.text == "Selenium Full Test"
    assert button_test2.text == "Selenium Buttons Test"
    assert button_test3.text == "Selenium Terminal Test"

def test_cypress_button(driver):
    driver.get("http://localhost:3000/")
    button = driver.find_element(By.ID, "test-button-cypress-menu")
    button.click()

    button_test1 = driver.find_element(By.XPATH, f"//*[contains(text(), 'Cypress Full Test')]")
    button_test2 = driver.find_element(By.XPATH, f"//*[contains(text(), 'Cypress Buttons Test')]")
    button_test3 = driver.find_element(By.XPATH, f"//*[contains(text(), 'Cypress Terminal Test')]")

    # time.sleep(2)
    assert button_test1.text == "Cypress Full Test"
    assert button_test2.text == "Cypress Buttons Test"
    assert button_test3.text == "Cypress Terminal Test"

def test_selenium_back_button(driver):
    driver.get("http://localhost:3000/")
    test_button = driver.find_element(By.ID, "test-button-selenium-menu")
    test_button.click()
    back_button = driver.find_element(By.ID, "back-button")
    back_button.click()

    # time.sleep(2)
    assert EC.invisibility_of_element_located((By.ID, "back-button"))
    assert EC.visibility_of_element_located((By.ID, "test-button-selenium-menu"))
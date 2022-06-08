import { SYNC_TEST_1, RESET_TESTS, MAIN_TEST, RESET_PRODUCTS } from "./types"

export const runSyncTest = (str) => ({ type: SYNC_TEST_1, payload: str })

export const resetTests = () => ({ type: RESET_TESTS })

export const runMainTest = () => ({ type: MAIN_TEST })

export const resetProducts = () => ({ type: RESET_PRODUCTS })

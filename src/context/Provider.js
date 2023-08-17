import React, { createContext, useReducer } from 'react'

import authInitialState from './initialState/Auth/authInitialState'
import countryListInitialState from './initialState/Common/countryListInitialState'
import otpVerificationInitialState from './initialState/Dashboard/otpVerificationInitialState'
import dashboardBannerInitialState from './initialState/Dashboard/dashboardBannerInitialState'
import productListInitialState from './initialState/Dashboard/productListInitialState'
import productListFilterInitialState from './initialState/Dashboard/productListFilterInitialState'
import productSerialNoInitialState from './initialState/Dashboard/productSerialNoInitialState'
import checkReferrerInitialState from './initialState/Dashboard/checkReferrerInitialState'
import productWarrantyRegisterStepFirstInitialState from './initialState/Dashboard/productWarrantyRegisterStepFirstInitialState'
import productWarrantyRegisterStepSecondInitialState from './initialState/Dashboard/productWarrantyRegisterStepSecondInitialState'
import newsListInitialState from './initialState/Dashboard/newsListInitialState'
import newsListByCategoryInitialState from './initialState/Dashboard/newsListByCategoryInitialState'
import newsDetailInitialState from './initialState/Dashboard/newsDetailInitialState'
import haloStoryListInitialState from './initialState/Dashboard/haloStoryListInitialState'
import haloStoryDetailsInitialState from './initialState/Dashboard/haloStoryDetailsInitialState'
import redemptionCentreListInitialState from './initialState/Dashboard/redemptionCentreListInitialState'
import redemptionCentreDetailInitialState from './initialState/Dashboard/redemptionCentreDetailInitialState'
import redeemVoucherInitialState from './initialState/Dashboard/redeemVoucherInitialState'

import welcomeInitialState from './initialState/Dashboard/welcomeInitialState'
import aboutUsInitialState from './initialState/Common/aboutUsInitialState'

import termsAndConditionsInitialState from './initialState/Dashboard/termsAndConditionsInitialState'
import forgotPasswordValidateUserInitialState from './initialState/Auth/forgotPasswordValidateUserInitialState'
import resetPasswordInitialState from './initialState/Auth/resetPasswordInitialState'
import navigationInitialState from './initialState/Common/navigationInitialState'
import myProductListInitialState from './initialState/Dashboard/myProductListInitialState'
import myProductDetailsInitialState from './initialState/Dashboard/myProductDetailsInitialState'
import productReviewSubmitInitialState from './initialState/Dashboard/productReviewSubmitInitialState'
import myProfileInitialState from './initialState/Dashboard/myProfileInitialState'
import profileUpdateInitialState from './initialState/Dashboard/profileUpdateInitialState'
import profileImageUpdateInitialState from './initialState/Dashboard/profileImageUpdateInitialState'
import profileManagePasswordInitialState from './initialState/Dashboard/profileManagePasswordInitialState'
import reviewListInitialState from './initialState/Dashboard/reviewListInitialState'
import productModelNoInitialState from './initialState/Dashboard/productModelNoInitialState'
import voucherListInitialState from './initialState/Dashboard/voucherListInitialState'
import voucherDetailsInitialState from './initialState/Dashboard/voucherDetailsInitialState'
import messageListInitialState from './initialState/Dashboard/messageListInitialState'
import messageListFilterInitialState from './initialState/Dashboard/messageListFilterInitialState'
import eRepairInitialState from './initialState/Dashboard/eRepairInitialState'

import auth from './reducers/Auth/auth'
import countryList from './reducers/Common/countryList'
import otpVerification from './reducers/Dashboard/otpVerification'
import dashboardBanner from './reducers/Dashboard/dashboardBanner'
import productList from './reducers/Dashboard/productList'
import productListFilter from './reducers/Dashboard/productListFilter'
import productSerialNo from './reducers/Dashboard/productSerialNo'
import checkReferrer from './reducers/Dashboard/checkReferrer'
import productWarrantyRegisterStepFirst from './reducers/Dashboard/productWarrantyRegisterStepFirst'
import productWarrantyRegisterStepSecond from './reducers/Dashboard/productWarrantyRegisterStepSecond'
import welcome from './reducers/Dashboard/welcome'
import newsList from './reducers/Dashboard/newsList'
import newsListByCategory from './reducers/Dashboard/newsListByCategory'
import newsDetail from './reducers/Dashboard/newsDetail'
import haloStoryList from './reducers/Dashboard/haloStoryList'
import haloStoryDetails from './reducers/Dashboard/haloStoryDetails'
import myProfile from './reducers/Dashboard/myProfile'
import profileUpdate from './reducers/Dashboard/profileUpdate'
import profileImageUpdate from './reducers/Dashboard/profileImageUpdate'
import profileManagePassword from './reducers/Dashboard/profileManagePassword'
import termsAndConditions from './reducers/Dashboard/termsAndConditions'
import forgotPassword from './reducers/Auth/forgotPassword'
import resetPassword from './reducers/Auth/resetPassword'
import navigation from './reducers/Common/navigation'
import myProductList from './reducers/Dashboard/myProductList'
import myProductDetails from './reducers/Dashboard/myProductDetails'
import productReviewSubmit from './reducers/Dashboard/productReviewSubmit'
import reviewList from './reducers/Dashboard/reviewList'
import productDetailsInitialState from './initialState/Dashboard/productDetailsInitialState'
import productDetails from './reducers/Dashboard/productDetails'
import redemptionCentreList from './reducers/Dashboard/redemptionCentreList'
import redemptionCentreDetail from './reducers/Dashboard/redemptionCentreDetail'
import reedemVoucher from './reducers/Dashboard/reedemVoucher'
import productModelNo from './reducers/Dashboard/productModelNo'
import aboutUs from './reducers/Common/aboutUs'
import voucherList from './reducers/Dashboard/voucherList'
import voucherDetails from './reducers/Dashboard/voucherDetails'
import messageList from './reducers/Dashboard/messageList'
import messageListFilter from './reducers/Dashboard/messageListFilter'
import messageDetailsInitialState from './initialState/Dashboard/messageDetailsInitialState'
import messageDetails from './reducers/Dashboard/messageDetails'
import eRepair from './reducers/Dashboard/eRepair'
import settingsInitialState from './initialState/Common/settingsInitialState'
import settings from './reducers/Common/settings'

export const GlobalContext = createContext({})

const GlobalProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(auth, authInitialState)
    const [countryListState, countryListDispatch] = useReducer(countryList, countryListInitialState)
    const [otpVerificationState, otpVerificationDispatch] = useReducer(otpVerification, otpVerificationInitialState)
    const [dashboardBannerState, dashboardBannerDispatch] = useReducer(dashboardBanner, dashboardBannerInitialState)
    const [productListState, productListDispatch] = useReducer(productList, productListInitialState)
    const [productListFilterState, productListFilterDispatch] = useReducer(productListFilter, productListFilterInitialState)
    const [productDetailsState, productDetailsDispatch] = useReducer(productDetails, productDetailsInitialState)
    const [productSerialNoState, productSerialNoDispatch] = useReducer(productSerialNo, productSerialNoInitialState)
    const [checkReferrerState, checkReferrerDispatch] = useReducer(checkReferrer, checkReferrerInitialState)
    const [productWarrantyRegisterStepFirstState, productWarrantyRegisterStepFirstDispatch] = useReducer(productWarrantyRegisterStepFirst, productWarrantyRegisterStepFirstInitialState)
    const [productWarrantyRegisterStepSecondState, productWarrantyRegisterStepSecondDispatch] = useReducer(productWarrantyRegisterStepSecond, productWarrantyRegisterStepSecondInitialState)
    const [myProfileState, myProfileDispatch] = useReducer(myProfile, myProfileInitialState)
    const [profileUpdateState, profileUpdateDispatch] = useReducer(profileUpdate, profileUpdateInitialState)
    const [profileImageUpdateState, profileImageUpdateDispatch] = useReducer(profileImageUpdate, profileImageUpdateInitialState)
    const [profileManagePasswordState, profileManagePasswordDispatch] = useReducer(profileManagePassword, profileManagePasswordInitialState)
    const [newsListState, newsListDispatch] = useReducer(newsList, newsListInitialState)
    const [newsListByCategoryState, newsListByCategoryDispatch] = useReducer(newsListByCategory, newsListByCategoryInitialState)
    const [newsDetailState, newsDetailDispatch] = useReducer(newsDetail, newsDetailInitialState)
    const [haloStoryListState, haloStoryListDispatch] = useReducer(haloStoryList, haloStoryListInitialState)
    const [haloStoryDetailsState, haloStoryDetailsDispatch] = useReducer(haloStoryDetails, haloStoryDetailsInitialState)
    const [welcomeState, welcomeDispatch] = useReducer(welcome, welcomeInitialState)
    const [termsAndConditionsState, termsAndConditionsDispatch] = useReducer(termsAndConditions, termsAndConditionsInitialState)
    const [forgotPasswordState, forgotPasswordDispatch] = useReducer(forgotPassword, forgotPasswordValidateUserInitialState)
    const [resetPasswordState, resetPasswordDispatch] = useReducer(resetPassword, resetPasswordInitialState)
    const [navigationState, navigationDispatch] = useReducer(navigation, navigationInitialState)
    const [myProductListState, myProductListDispatch] = useReducer(myProductList, myProductListInitialState)
    const [myProductDetailsState, myProductDetailsDispatch] = useReducer(myProductDetails, myProductDetailsInitialState)
    const [productReviewSubmitState, productReviewSubmitDispatch] = useReducer(productReviewSubmit, productReviewSubmitInitialState)
    const [redemptionCentreListState, redemptionCentreListDispatch] = useReducer(redemptionCentreList, redemptionCentreListInitialState)
    const [redemptionCentreDetailState, redemptionCentreDetailDispatch] = useReducer(redemptionCentreDetail, redemptionCentreDetailInitialState)
    const [reedemVoucherState, reedemVoucherDispatch] = useReducer(reedemVoucher, redeemVoucherInitialState)
    const [reviewListState, reviewListDispatch] = useReducer(reviewList, reviewListInitialState)
    const [productModelNoState, productModelNoDispatch] = useReducer(productModelNo,productModelNoInitialState)
    const [aboutUsState, aboutUsDispatch] = useReducer(aboutUs, aboutUsInitialState)
    const [voucherListState, voucherListDispatch] = useReducer(voucherList, voucherListInitialState)
    const [voucherDetailsState, voucherDetailsDispatch] = useReducer(voucherDetails, voucherDetailsInitialState)
    const [messageListState, messageListDispatch] = useReducer(messageList, messageListInitialState)
    const [messageListFilterState, messageListFilterDispatch] = useReducer(messageListFilter, messageListFilterInitialState)
    const [messageDetailsState, messageDetailsDispatch] = useReducer(messageDetails, messageDetailsInitialState)
    const [eRepairState, eRepairDispatch] = useReducer(eRepair , eRepairInitialState)
    const [settingsState, settingsDispatch] = useReducer(settings,settingsInitialState)

    return (
        <GlobalContext.Provider value={{
            authState,
            countryListState,
            otpVerificationState,
            dashboardBannerState,
            productListState,
            productListFilterState,
            productDetailsState,
            productSerialNoState,
            checkReferrerState,
            productWarrantyRegisterStepFirstState,
            productWarrantyRegisterStepSecondState,
            newsListState,
            newsListByCategoryState,
            newsDetailState,
            haloStoryListState,
            haloStoryDetailsState,
            welcomeState,
            termsAndConditionsState,
            forgotPasswordState,
            resetPasswordState,
            navigationState,
            myProductListState,
            myProductDetailsState,
            reviewListState,
            productReviewSubmitState,
            myProfileState,
            profileUpdateState,
            profileImageUpdateState,
            profileManagePasswordState,
            redemptionCentreListState,
            redemptionCentreDetailState,
            productModelNoState,
            aboutUsState,
            reedemVoucherState,
            voucherListState,
            voucherDetailsState,
            messageListState,
            messageListFilterState,
            messageDetailsState,
            eRepairState,
            settingsState,
            
            authDispatch,
            countryListDispatch,
            otpVerificationDispatch,
            dashboardBannerDispatch,
            productListDispatch,
            productListFilterDispatch,
            productDetailsDispatch,
            productSerialNoDispatch,
            checkReferrerDispatch,
            productWarrantyRegisterStepFirstDispatch,
            productWarrantyRegisterStepSecondDispatch,
            newsListDispatch,
            newsListByCategoryDispatch,
            newsDetailDispatch,
            haloStoryListDispatch,
            haloStoryDetailsDispatch,
            welcomeDispatch,
            termsAndConditionsDispatch,
            forgotPasswordDispatch,
            resetPasswordDispatch,
            navigationDispatch,
            myProductListDispatch,
            myProductDetailsDispatch,
            reviewListDispatch,
            productReviewSubmitDispatch,
            myProfileDispatch,
            profileUpdateDispatch,
            profileImageUpdateDispatch,
            profileManagePasswordDispatch,
            redemptionCentreListDispatch,
            redemptionCentreDetailDispatch,
            productModelNoDispatch,
            aboutUsDispatch,
            reedemVoucherDispatch,
            voucherListDispatch,
            voucherDetailsDispatch,
            messageListDispatch,
            messageListFilterDispatch,
            messageDetailsDispatch,
            eRepairDispatch,
            settingsDispatch
        }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalProvider
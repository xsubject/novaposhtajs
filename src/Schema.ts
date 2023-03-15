import BaseSchema from "./BaseSchema"

export type AddressSearchSettlementsRequest = {
	cityName: string
	limit: string
	page: string
}

export type AddressSearchSettlementsResponse = {
	totalCount: string
	addresses: string[]
	warehouses: string
	mainDescription: string
	area: string
	region: string
	settlementTypeCode: string
	ref: string
	deliveryCity: string
}

export type AddressSearchSettlementStreetsRequest = {
	streetName: string
	settlementRef: string
	limit?: string
}

export type AddressSearchSettlementStreetsResponse = {
	totalCount: string
	settlementRef: string
	settlementStreetRef: string
	settlementStreetDescription: string
	present: string
	streetsType: string
	streetsTypeDescription: string
	location: string
}

export type AddressSaveRequest = {
	counterpartyRef: string
	streetRef: string
	buildingNumber: string
	flat: string
	note?: string
}

export type AddressSaveResponse = {
	ref: string
	description: string
}

export type AddressDeleteRequest = {
	ref: string
}

export type AddressDeleteResponse = {
	ref: string
}

export type AddressUpdateRequest = {
	counterpartyRef?: string
	streetRef?: string
	buildingNumber?: string
	flat?: string
	note?: string
	ref: string
}

export type AddressUpdateResponse = {
	ref: string
	description: string
}

export type AddressGetSettlementsRequest = {
	areaRef?: string
	ref?: string
	regionRef?: string
	page?: string
	warehouse?: string
	findByString?: string
	limit?: string
}

export type AddressGetSettlementsResponse = {
	ref: string
	settlementType: string
	latitude: string
	longitude: string
	description: string
	descriptionRu: string
	settlementTypeDescription: string
	settlementTypeDescriptionRu: string
	region: string
	regionsDescription: string
	regionsDescriptionRu: string
	area: string
	areaDescription: string
	areaDescriptionRu: string
	index1: string
	index2: string
	indexCOATSU1: string
	delivery1: string
	delivery2: string
	delivery3: string
	delivery4: string
	delivery5: string
	delivery6: string
	delivery7: string
	warehouse: string
	conglomerates: string[]
}

export type AddressGetCitiesRequest = {
	ref?: string
	page?: string
	findByString?: string
	limit?: string
}

export type AddressGetCitiesResponse = {
	description: string
	descriptionRu: string
	ref: string
	delivery1: string
	delivery2: string
	delivery3: string
	delivery4: string
	delivery5: string
	delivery6: string
	delivery7: string
	area: string
	settlementType: string
	isBranch: string
	preventEntryNewStreetsUser: string
	conglomerates: string
	cityID: string
	settlementTypeDescriptionRu: string
	settlementTypeDescription: string
}

export type AddressGetAreasRequest = {

}

export type AddressGetAreasResponse = {
	ref: string
	areasCenter: string
	descriptionRu: string
	description: string
}

export type AddressGetWarehousesRequest = {
	cityName?: string
	cityRef?: string
	page?: string
	limit?: string
	language?: string
	typeOfWarehouseRef?: string
	warehouseId?: string
}

export type AddressGetWarehousesResponse = {
	siteKey: string
	description: string
	descriptionRu: string
	shortAddress: string
	shortAddressRu: string
	phone: string
	typeOfWarehouse: string
	ref: string
	number: string
	cityRef: string
	cityDescription: string
	cityDescriptionRu: string
	settlementRef: string
	settlementDescription: string
	settlementAreaDescription: string
	settlementRegionsDescription: string
	settlementTypeDescription: string
	settlementTypeDescriptionRu: string
	longitude: number
	latitude: number
	postFinance: string
	bicycleParking: string
	paymentAccess: string
	pOSTerminal: string
	internationalShipping: string
	selfServiceWorkplacesCount: string
	totalMaxWeightAllowed: string
	placeMaxWeightAllowed: string
	sendingLimitationsOnDimensions: object
	receivingLimitationsOnDimensions: object
	reception: object
	delivery: object
	schedule: object
	districtCode: string
	warehouseStatus: string
	warehouseStatusDate: string
	categoryOfWarehouse: string
	regionCity: string
	warehouseForAgent: string
	maxDeclaredCost: string
	denyToSelect: string
	postMachineType: string
	postalCodeUA: string
	onlyReceivingParcel: string
	warehouseIndex: string
}

export type AddressGetWarehouseTypesRequest = {

}

export type AddressGetWarehouseTypesResponse = {
	ref: string
	description: string
	descriptionRu: string
}

export type AddressGetStreetRequest = {
	cityRef: string
	findByString: string
	page?: string
	limit?: string
}

export type AddressGetStreetResponse = {
	ref: string
	description: string
	streetsTypeRef: string
	streetsType: string
}

export type CounterpartyUpdateRequest = {
	ref: string
	cityRef: string
	firstName: string
	middleName: string
	lastName: string
	phone?: string
	email?: string
	counterpartyType: string
	counterpartyProperty: string
}

export type CounterpartyUpdateResponse = {
	ref: string
	description: string
	firstName: string
	middleName: string
	lastName: string
	counterparty: string
	ownershipForm: string
	ownershipFormDescription: string
	eDRPOU: string
	counterpartyType: string
	contactPerson: string
}

export type CounterpartyDeleteRequest = {
	ref: string
}

export type CounterpartyDeleteResponse = {
	ref: string
}

export type CounterpartyGetCounterpartyAddressesRequest = {
	ref: string
	counterpartyProperty: string
}

export type CounterpartyGetCounterpartyAddressesResponse = {
	ref: string
	description: string
}

export type CounterpartyGetCounterpartyOptionsRequest = {
	ref: string
}

export type CounterpartyGetCounterpartyOptionsResponse = {
	addressDocumentDelivery: boolean
	afterpaymentType: boolean
	backwardDeliverySubtypesDocuments: boolean
	blockInternationalSenderLKK: boolean
	calculationByFactualWeight: boolean
	canAfterpaymentOnGoodsCost: boolean
	canCreditDocuments: boolean
	canEWTransporter: boolean
	canForwardingService: boolean
	canNonCashPayment: boolean
	canPayTheThirdPerson: boolean
	canSameDayDelivery: boolean
	canSameDayDeliveryStandart: boolean
	canSentFromPostomat: boolean
	canSignedDocuments: boolean
	carCall: boolean
	creditDocuments: boolean
	customerReturn: boolean
	dayCustomerReturn: boolean
	debtorParams: string[]
	deliveryByHand: boolean
	descentFromFloor: boolean
	fillingWarranty: boolean
	haveMoneyWallets: boolean
	hideDeliveryCost: boolean
	internationalDelivery: boolean
	internationalDeliveryServiceType: boolean
	loyaltyProgram: boolean
	mainCounterparty: boolean
	pickupService: boolean
	printMarkingAllowedTypes: object
	securePayment: boolean
	services: boolean
	showDeliveryByHand: boolean
	signedDocuments: boolean
	transferPricingConditions: boolean
}

export type CounterpartyGetCounterpartyContactPersonsRequest = {
	ref: string
	page?: string
}

export type CounterpartyGetCounterpartyContactPersonsResponse = {
	description: string
	ref: string
	phones: string
	email: string
	lastName: string
	firstName: string
	middleName: string
}

export type CounterpartyGetCounterpartiesRequest = {
	counterpartyProperty: string
	page?: string
}

export type CounterpartyGetCounterpartiesResponse = {
	description: string
	ref: string
	city: string
	counterparty: string
	firstName: string
	lastName: string
	middleName: string
	ownershipFormRef: string
	ownershipFormDescription: string
	eDRPOU: string
	counterpartyType: string
}

export type ContactPersonSaveRequest = {
	counterpartyRef: string
	firstName: string
	lastName: string
	middleName: string
	phone: string
}

export type ContactPersonSaveResponse = {
	ref: string
	description: string
	lastName: string
	firstName: string
	middleName: string
	phones: string
	email: string
}

export type ContactPersonUpdateRequest = {
	counterpartyRef: string
	ref: string
	firstName: string
	lastName: string
	middleName: string
	phone: string
}

export type ContactPersonUpdateResponse = {
	ref: string
	description: string
	lastName: string
	firstName: string
	middleName: string
	phones: string
	email: string
}

export type ContactPersonDeleteRequest = {
	ref: string
}

export type ContactPersonDeleteResponse = {
	ref: string
}

export type ScanSheetInsertDocumentsRequest = {
	documentRefs: string[]
	ref: string
	date: string
}

export type ScanSheetInsertDocumentsResponse = {
	ref: string
	number: string
	date: string
}

export type ScanSheetGetScanSheetRequest = {
	ref: string
	counterpartyRef: string
}

export type ScanSheetGetScanSheetResponse = {
	ref: string
	number: string
	dateTime: string
	count: string
	citySenderRef: string
	citySender: string
	senderAddressRef: string
	senderAddress: string
	senderRef: string
	sender: string
}

export type ScanSheetGetScanSheetListRequest = {

}

export type ScanSheetGetScanSheetListResponse = {
	ref: string
	number: string
	dateTime: string
	printed: string
}

export type ScanSheetDeleteScanSheetRequest = {
	scanSheetRefs: string[]
}

export type ScanSheetDeleteScanSheetResponse = {
	ref: string
	number: string
	error: string
}

export type ScanSheetRemoveDocumentsRequest = {
	documentRefs: string[]
	ref?: string
}

export type ScanSheetRemoveDocumentsResponse = {
	ref: string
	number: string
	error: string
}

export type CommonGetTimeIntervalsRequest = {
	recipientCityRef: string
	dateTime?: string
}

export type CommonGetTimeIntervalsResponse = {
	number: string
	start: string
	end: string
}

export type CommonGetCargoTypesRequest = {

}

export type CommonGetCargoTypesResponse = {
	ref: string
	description: string
}

export type CommonGetBackwardDeliveryCargoTypesRequest = {

}

export type CommonGetBackwardDeliveryCargoTypesResponse = {
	ref: string
	description: string
}

export type CommonGetPalletsListRequest = {

}

export type CommonGetPalletsListResponse = {
	ref: string
	description: string
	descriptionRu: string
	weight: string
}

export type CommonGetTypesOfPayersForRedeliveryRequest = {

}

export type CommonGetTypesOfPayersForRedeliveryResponse = {
	ref: string
	description: string
}

export type CommonGetPackListRequest = {
	lengthstring?: string
	widthstring?: string
	heightstring?: string
	volumetricWeightstring?: string
	typeOfPackingstring?: string
}

export type CommonGetPackListResponse = {
	ref: string
	description: string
	descriptionRu: string
	length: string
	width: string
	height: string
	volumetricWeight: string
	typeOfPacking: string
}

export type CommonGetTiresWheelsListRequest = {

}

export type CommonGetTiresWheelsListResponse = {
	ref: string
	description: string
	descriptionRu: string
	weight: string
	descriptionType: string
}

export type CommonGetCargoDescriptionListRequest = {
	findByString?: string
	page?: string
}

export type CommonGetCargoDescriptionListResponse = {
	ref: string
	description: string
	descriptionRu: string
}

export type CommonGetMessageCodeTextRequest = {

}

export type CommonGetMessageCodeTextResponse = {
	messageCode: string
	messageText: string
	messageDescriptionRU: string
	messageDescriptionUA: string
}

export type CommonGetServiceTypesRequest = {

}

export type CommonGetServiceTypesResponse = {
	ref: string
	description: string
}

export type CommonGetOwnershipFormsListRequest = {

}

export type CommonGetOwnershipFormsListResponse = {
	ref: string
	description: string
	fullName: string
}

export type AdditionalServiceCheckPossibilityCreateReturnRequest = {
	number: string
}

export type AdditionalServiceCheckPossibilityCreateReturnResponse = {
	nonCash: boolean
	city: string
	counterparty: string
	contactPerson: string
	address: string
	phone: string
	ref: string
}

export type AdditionalServiceGetReturnReasonsRequest = {

}

export type AdditionalServiceGetReturnReasonsResponse = {
	ref: string
	description: string
}

export type AdditionalServiceGetReturnReasonsSubtypesRequest = {
	reasonRef: string
}

export type AdditionalServiceGetReturnReasonsSubtypesResponse = {
	ref: string
	description: string
	reasonRef: string
}

export type AdditionalServiceGetReturnOrdersListRequest = {
	number?: string
	ref?: string
	beginDate?: string
	endDate?: string
	page?: string
	limit?: string
}

export type AdditionalServiceGetReturnOrdersListResponse = {
	orderRef: string
	orderNumber: string
	orderStatus: string
	documentNumber: string
	counterpartyRecipient: string
	contactPersonRecipient: string
	addressRecipient: string
	deliveryCost: string
	estimatedDeliveryDate: string
	expressWaybillNumber: string
	expressWaybillStatus: string
}

export type AdditionalServiceDeleteRequest = {
	ref: string
}

export type AdditionalServiceDeleteResponse = {
	number: string
}

export type AdditionalServiceCheckPossibilityChangeEWRequest = {
	intDocNumber: string
}

export type AdditionalServiceCheckPossibilityChangeEWResponse = {
	canChangeSender: boolean
	canChangeRecipient: boolean
	canChangePayerTypeOrPaymentMethod: boolean
	canChangeBackwardDeliveryDocuments: boolean
	canChangeBackwardDeliveryMoney: boolean
	canChangeCash2Card: boolean
	canChangeBackwardDeliveryOther: boolean
	canChangeAfterpaymentType: boolean
	canChangeLiftingOnFloor: boolean
	canChangeLiftingOnFloorWithElevator: boolean
	canChangeFillingWarranty: boolean
	senderCounterparty: string
	contactPersonSender: string
	senderPhone: string
	recipientCounterparty: string
	contactPersonRecipient: string
	recipientPhone: string
	payerType: string
	paymentMethod: string
}

export type AdditionalServiceGetChangeEWOrdersListRequest = {
	number?: string
	ref?: string
	beginDate: string
	endDate: string
	page: string
	limit: string
}

export type AdditionalServiceGetChangeEWOrdersListResponse = {
	orderRef: string
	orderNumber: string
	orderStatus: string
	documentNumber: string
	dateTime: string
	beforeChangeSenderCounterparty: string
	afterChangeChangeSenderCounterparty: string
	cost: string
	beforeChangeSenderPhone: string
	afterChangeSenderPhone: string
}

export type AdditionalServiceCheckPossibilityForRedirectingRequest = {
	number: string
}

export type AdditionalServiceCheckPossibilityForRedirectingResponse = {
	ref: string
	number: string
	payerType: string
	paymentMethod: string
	warehouseRef: string
	warehouseDescription: string
	addressDescription: string
	streetDescription: string
	buildingNumber: string
	cityRecipient: string
	cityRecipientDescription: string
	settlementRecipient: string
	settlementRecipientDescription: string
	settlementType: string
	counterpartyRecipientRef: string
	counterpartyRecipientDescription: string
	recipientName: string
	phoneSender: string
	phoneRecipient: string
	documentWeight: string
}

export type AdditionalServiceGetRedirectionOrdersListRequest = {
	number?: string
	ref?: string
	beginDate?: string
	endDate?: string
	page?: string
	limit?: string
}

export type AdditionalServiceGetRedirectionOrdersListResponse = {
	orderRef: string
	orderNumber: string
	dateTime: string
	documentNumber: string
	note: string
	cityRecipient: string
	recipientAddress: string
	counterpartyRecipient: string
	recipientName: string
	phoneRecipient: string
	payerType: string
	deliveryCost: string
	estimatedDeliveryDate: string
	expressWaybillNumber: string
	expressWaybillStatus: string
}

export type InternetDocumentGetDocumentPriceRequest = {
	citySender: string
	cityRecipient: string
	weight: string
	serviceType: string
	cost: string
	cargoType: string
	seatsAmount: string
	redeliveryCalculate?: object
	packCount?: string
	packRef?: string
	amount?: string
	cargoDetails?: string[]
	cargoDescription?: string
}

export type InternetDocumentGetDocumentPriceResponse = {
	assessedCost: string
	cost: string
	costRedelivery: string
	tZoneInfo: object
	costPack: string
}

export type InternetDocumentGetDocumentDeliveryDateRequest = {
	dateTime?: string
	serviceType: string
	citySender: string
	cityRecipient: string
}

export type InternetDocumentGetDocumentDeliveryDateResponse = {
	date: string
	timezone_type: string
	timezone: string
}

export type InternetDocumentUpdateRequest = {
	ref: string
	payerType: string
	paymentMethod: string
	dateTime: string
	cargoType: string
	volumeGeneral?: string
	weight: string
	serviceType: string
	seatsAmount: string
	description: string
	cost: string
	citySender: string
	sender: string
	senderAddress: string
	contactSender: string
	sendersPhone: string
	cityRecipient: string
	recipient: string
	recipientAddress: string
	contactRecipient: string
	recipientsPhone: string
}

export type InternetDocumentUpdateResponse = {
	ref: string
	costOnSite: string
	estimatedDeliveryDate: string
	intDocNumber: string
	typeDocument: string
}

export type InternetDocumentGetDocumentListRequest = {
	dateTimeFrom: string
	dateTimeTo: string
	page?: string
	getFullList: string
	dateTime?: string
}

export type InternetDocumentGetDocumentListResponse = {
	ref: string
	dateTime: string
	preferredDeliveryDate: string
	recipientDateTime: string
	eWDateCreated: string
	weight: string
	seatsAmount: string
	intDocNumber: string
	cost: string
	citySender: string
	cityRecipient: string
	senderAddress: string
	recipientAddress: string
	costOnSite: string
	payerType: string
	paymentMethod: string
	afterpaymentOnGoodsCost: string
	packingNumber: string
	rejectionReason: string
	stateId: string
	stateName: string
}

export type InternetDocumentDeleteRequest = {
	documentRefs: string
}

export type InternetDocumentDeleteResponse = {
	ref: string
}

export type InternetDocumentGenerateReportRequest = {
	documentRefs: string[]
	type: string
	dateTime: string
}

export type InternetDocumentGenerateReportResponse = {
	ref: string
	dateTime: string
	preferredDeliveryDate: string
	weight: string
	seatsAmount: string
	intDocNumber: string
	cost: string
	citySender: string
	cityRecipient: string
	state: string
	senderAddress: string
	recipientAddress: string
	costOnSite: string
	payerType: string
	paymentMethod: string
	afterpaymentOnGoodsCost: string
	packingNumber: string
}

export type TrackingDocumentGetStatusDocumentsRequest = {
	documents: string[]
}

export type TrackingDocumentGetStatusDocumentsResponse = {
	possibilityCreateReturn: boolean
	possibilityCreateRefusal: boolean
	possibilityChangeEW: boolean
	possibilityCreateRedirecting: boolean
	number: string
	redelivery: string
	redeliverySum: string
	redeliveryNum: string
	redeliveryPayer: string
	ownerDocumentType: string
	lastCreatedOnTheBasisDocumentType: string
	lastCreatedOnTheBasisPayerType: string
	lastCreatedOnTheBasisDateTime: string
	lastTransactionStatusGM: string
	lastTransactionDateTimeGM: string
	lastAmountTransferGM: string
	dateCreated: string
	documentWeight: string
	factualWeight: string
	volumeWeight: string
	checkWeight: string
	checkWeightMethod: string
	documentCost: string
	calculatedWeight: string
	sumBeforeCheckWeight: string
	payerType: string
	recipientFullName: string
	recipientDateTime: string
	scheduledDeliveryDate: string
	paymentMethod: string
	cargoDescriptionString: string
	cargoType: string
	citySender: string
	cityRecipient: string
	warehouseRecipient: string
	counterpartyType: string
	afterpaymentOnGoodsCost: string
	serviceType: string
	undeliveryReasonsSubtypeDescription: string
	warehouseRecipientNumber: string
	lastCreatedOnTheBasisNumber: string
	phoneRecipient: string
	recipientFullNameEW: string
	warehouseRecipientInternetAddressRef: string
	marketplacePartnerToken: string
	clientBarcode: string
	recipientAddress: string
	counterpartyRecipientDescription: string
	counterpartySenderType: string
	dateScan: string
	paymentStatus: string
	paymentStatusDate: string
	amountToPay: string
	amountPaid: string
	status: string
	statusCode: string
	refEW: string
	backwardDeliverySubTypesActions: string
	backwardDeliverySubTypesServices: string
	undeliveryReasons: string
	datePayedKeeping: string
	internationalDeliveryType: string
	seatsAmount: string
	cardMaskedNumber: string
	expressWaybillPaymentStatus: string
	expressWaybillAmountToPay: string
	phoneSender: string
	trackingUpdateDate: string
	warehouseSender: string
	dateReturnCargo: string
	dateMoving: string
	dateFirstDayStorage: string
	refCityRecipient: string
	refCitySender: string
	refSettlementRecipient: string
	refSettlementSender: string
	senderAddress: string
	senderFullNameEW: string
	announcedPrice: string
	additionalInformationEW: string
	actualDeliveryDate: string
	postomatV3CellReservationNumber: string
	ownerDocumentNumber: string
	lastAmountReceivedCommissionGM: string
	deliveryTimeframe: string
	createdOnTheBasis: string
	undeliveryReasonsDate: string
	recipientWarehouseTypeRef: string
	warehouseRecipientRef: string
	categoryOfWarehouse: string
	warehouseRecipientAddress: string
	warehouseSenderInternetAddressRef: string
	warehouseSenderAddress: string
	aviaDelivery: string
	barcodeRedBox: string
	cargoReturnRefusal: string
	daysStorageCargo: string
	packaging: string[]
	partialReturnGoods: string[]
	securePayment: string
	possibilityChangeCash2Card: boolean
	possibilityChangeDeliveryIntervals: boolean
	possibilityTermExtensio: boolean
	storageAmount: string
	storagePrice: string
	freeShipping: string
	loyaltyCardRecipient: string
}

export interface Schema extends BaseSchema {
	address: {
		searchSettlements: {
			params: AddressSearchSettlementsRequest,
			ret: AddressSearchSettlementsResponse
		}
		searchSettlementStreets: {
			params: AddressSearchSettlementStreetsRequest,
			ret: AddressSearchSettlementStreetsResponse
		}
		save: {
			params: AddressSaveRequest,
			ret: AddressSaveResponse
		}
		delete: {
			params: AddressDeleteRequest,
			ret: AddressDeleteResponse
		}
		update: {
			params: AddressUpdateRequest,
			ret: AddressUpdateResponse
		}
		getSettlements: {
			params: AddressGetSettlementsRequest,
			ret: AddressGetSettlementsResponse
		}
		getCities: {
			params: AddressGetCitiesRequest,
			ret: AddressGetCitiesResponse
		}
		getAreas: {
			params: AddressGetAreasRequest,
			ret: AddressGetAreasResponse
		}
		getWarehouses: {
			params: AddressGetWarehousesRequest,
			ret: AddressGetWarehousesResponse
		}
		getWarehouseTypes: {
			params: AddressGetWarehouseTypesRequest,
			ret: AddressGetWarehouseTypesResponse
		}
		getStreet: {
			params: AddressGetStreetRequest,
			ret: AddressGetStreetResponse
		}
	}
	counterparty: {
		update: {
			params: CounterpartyUpdateRequest,
			ret: CounterpartyUpdateResponse
		}
		delete: {
			params: CounterpartyDeleteRequest,
			ret: CounterpartyDeleteResponse
		}
		getCounterpartyAddresses: {
			params: CounterpartyGetCounterpartyAddressesRequest,
			ret: CounterpartyGetCounterpartyAddressesResponse
		}
		getCounterpartyOptions: {
			params: CounterpartyGetCounterpartyOptionsRequest,
			ret: CounterpartyGetCounterpartyOptionsResponse
		}
		getCounterpartyContactPersons: {
			params: CounterpartyGetCounterpartyContactPersonsRequest,
			ret: CounterpartyGetCounterpartyContactPersonsResponse
		}
		getCounterparties: {
			params: CounterpartyGetCounterpartiesRequest,
			ret: CounterpartyGetCounterpartiesResponse
		}
	}
	contactPerson: {
		save: {
			params: ContactPersonSaveRequest,
			ret: ContactPersonSaveResponse
		}
		update: {
			params: ContactPersonUpdateRequest,
			ret: ContactPersonUpdateResponse
		}
		delete: {
			params: ContactPersonDeleteRequest,
			ret: ContactPersonDeleteResponse
		}
	}
	scanSheet: {
		insertDocuments: {
			params: ScanSheetInsertDocumentsRequest,
			ret: ScanSheetInsertDocumentsResponse
		}
		getScanSheet: {
			params: ScanSheetGetScanSheetRequest,
			ret: ScanSheetGetScanSheetResponse
		}
		getScanSheetList: {
			params: ScanSheetGetScanSheetListRequest,
			ret: ScanSheetGetScanSheetListResponse
		}
		deleteScanSheet: {
			params: ScanSheetDeleteScanSheetRequest,
			ret: ScanSheetDeleteScanSheetResponse
		}
		removeDocuments: {
			params: ScanSheetRemoveDocumentsRequest,
			ret: ScanSheetRemoveDocumentsResponse
		}
	}
	common: {
		getTimeIntervals: {
			params: CommonGetTimeIntervalsRequest,
			ret: CommonGetTimeIntervalsResponse
		}
		getCargoTypes: {
			params: CommonGetCargoTypesRequest,
			ret: CommonGetCargoTypesResponse
		}
		getBackwardDeliveryCargoTypes: {
			params: CommonGetBackwardDeliveryCargoTypesRequest,
			ret: CommonGetBackwardDeliveryCargoTypesResponse
		}
		getPalletsList: {
			params: CommonGetPalletsListRequest,
			ret: CommonGetPalletsListResponse
		}
		getTypesOfPayersForRedelivery: {
			params: CommonGetTypesOfPayersForRedeliveryRequest,
			ret: CommonGetTypesOfPayersForRedeliveryResponse
		}
		getPackList: {
			params: CommonGetPackListRequest,
			ret: CommonGetPackListResponse
		}
		getTiresWheelsList: {
			params: CommonGetTiresWheelsListRequest,
			ret: CommonGetTiresWheelsListResponse
		}
		getCargoDescriptionList: {
			params: CommonGetCargoDescriptionListRequest,
			ret: CommonGetCargoDescriptionListResponse
		}
		getMessageCodeText: {
			params: CommonGetMessageCodeTextRequest,
			ret: CommonGetMessageCodeTextResponse
		}
		getServiceTypes: {
			params: CommonGetServiceTypesRequest,
			ret: CommonGetServiceTypesResponse
		}
		getOwnershipFormsList: {
			params: CommonGetOwnershipFormsListRequest,
			ret: CommonGetOwnershipFormsListResponse
		}
	}
	additionalService: {
		CheckPossibilityCreateReturn: {
			params: AdditionalServiceCheckPossibilityCreateReturnRequest,
			ret: AdditionalServiceCheckPossibilityCreateReturnResponse
		}
		getReturnReasons: {
			params: AdditionalServiceGetReturnReasonsRequest,
			ret: AdditionalServiceGetReturnReasonsResponse
		}
		getReturnReasonsSubtypes: {
			params: AdditionalServiceGetReturnReasonsSubtypesRequest,
			ret: AdditionalServiceGetReturnReasonsSubtypesResponse
		}
		getReturnOrdersList: {
			params: AdditionalServiceGetReturnOrdersListRequest,
			ret: AdditionalServiceGetReturnOrdersListResponse
		}
		delete: {
			params: AdditionalServiceDeleteRequest,
			ret: AdditionalServiceDeleteResponse
		}
		CheckPossibilityChangeEW: {
			params: AdditionalServiceCheckPossibilityChangeEWRequest,
			ret: AdditionalServiceCheckPossibilityChangeEWResponse
		}
		getChangeEWOrdersList: {
			params: AdditionalServiceGetChangeEWOrdersListRequest,
			ret: AdditionalServiceGetChangeEWOrdersListResponse
		}
		checkPossibilityForRedirecting: {
			params: AdditionalServiceCheckPossibilityForRedirectingRequest,
			ret: AdditionalServiceCheckPossibilityForRedirectingResponse
		}
		getRedirectionOrdersList: {
			params: AdditionalServiceGetRedirectionOrdersListRequest,
			ret: AdditionalServiceGetRedirectionOrdersListResponse
		}
	}
	internetDocument: {
		getDocumentPrice: {
			params: InternetDocumentGetDocumentPriceRequest,
			ret: InternetDocumentGetDocumentPriceResponse
		}
		getDocumentDeliveryDate: {
			params: InternetDocumentGetDocumentDeliveryDateRequest,
			ret: InternetDocumentGetDocumentDeliveryDateResponse
		}
		update: {
			params: InternetDocumentUpdateRequest,
			ret: InternetDocumentUpdateResponse
		}
		getDocumentList: {
			params: InternetDocumentGetDocumentListRequest,
			ret: InternetDocumentGetDocumentListResponse
		}
		delete: {
			params: InternetDocumentDeleteRequest,
			ret: InternetDocumentDeleteResponse
		}
		generateReport: {
			params: InternetDocumentGenerateReportRequest,
			ret: InternetDocumentGenerateReportResponse
		}
	}
	trackingDocument: {
		getStatusDocuments: {
			params: TrackingDocumentGetStatusDocumentsRequest,
			ret: TrackingDocumentGetStatusDocumentsResponse
		}
	}
}

export default Schema;
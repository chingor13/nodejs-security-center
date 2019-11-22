// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import * as Long from "long";
import * as $protobuf from "protobufjs";
/** Namespace google. */
export namespace google {

    /** Namespace cloud. */
    namespace cloud {

        /** Namespace securitycenter. */
        namespace securitycenter {

            /** Namespace v1. */
            namespace v1 {

                /** Represents a SecurityCenter */
                class SecurityCenter extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SecurityCenter service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SecurityCenter service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SecurityCenter;

                    /**
                     * Calls CreateSource.
                     * @param request CreateSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public createSource(request: google.cloud.securitycenter.v1.ICreateSourceRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.CreateSourceCallback): void;

                    /**
                     * Calls CreateSource.
                     * @param request CreateSourceRequest message or plain object
                     * @returns Promise
                     */
                    public createSource(request: google.cloud.securitycenter.v1.ICreateSourceRequest): Promise<google.cloud.securitycenter.v1.Source>;

                    /**
                     * Calls CreateFinding.
                     * @param request CreateFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public createFinding(request: google.cloud.securitycenter.v1.ICreateFindingRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.CreateFindingCallback): void;

                    /**
                     * Calls CreateFinding.
                     * @param request CreateFindingRequest message or plain object
                     * @returns Promise
                     */
                    public createFinding(request: google.cloud.securitycenter.v1.ICreateFindingRequest): Promise<google.cloud.securitycenter.v1.Finding>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls GetOrganizationSettings.
                     * @param request GetOrganizationSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OrganizationSettings
                     */
                    public getOrganizationSettings(request: google.cloud.securitycenter.v1.IGetOrganizationSettingsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.GetOrganizationSettingsCallback): void;

                    /**
                     * Calls GetOrganizationSettings.
                     * @param request GetOrganizationSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getOrganizationSettings(request: google.cloud.securitycenter.v1.IGetOrganizationSettingsRequest): Promise<google.cloud.securitycenter.v1.OrganizationSettings>;

                    /**
                     * Calls GetSource.
                     * @param request GetSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public getSource(request: google.cloud.securitycenter.v1.IGetSourceRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.GetSourceCallback): void;

                    /**
                     * Calls GetSource.
                     * @param request GetSourceRequest message or plain object
                     * @returns Promise
                     */
                    public getSource(request: google.cloud.securitycenter.v1.IGetSourceRequest): Promise<google.cloud.securitycenter.v1.Source>;

                    /**
                     * Calls GroupAssets.
                     * @param request GroupAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GroupAssetsResponse
                     */
                    public groupAssets(request: google.cloud.securitycenter.v1.IGroupAssetsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.GroupAssetsCallback): void;

                    /**
                     * Calls GroupAssets.
                     * @param request GroupAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public groupAssets(request: google.cloud.securitycenter.v1.IGroupAssetsRequest): Promise<google.cloud.securitycenter.v1.GroupAssetsResponse>;

                    /**
                     * Calls GroupFindings.
                     * @param request GroupFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GroupFindingsResponse
                     */
                    public groupFindings(request: google.cloud.securitycenter.v1.IGroupFindingsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.GroupFindingsCallback): void;

                    /**
                     * Calls GroupFindings.
                     * @param request GroupFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public groupFindings(request: google.cloud.securitycenter.v1.IGroupFindingsRequest): Promise<google.cloud.securitycenter.v1.GroupFindingsResponse>;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAssetsResponse
                     */
                    public listAssets(request: google.cloud.securitycenter.v1.IListAssetsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.ListAssetsCallback): void;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAssets(request: google.cloud.securitycenter.v1.IListAssetsRequest): Promise<google.cloud.securitycenter.v1.ListAssetsResponse>;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingsResponse
                     */
                    public listFindings(request: google.cloud.securitycenter.v1.IListFindingsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.ListFindingsCallback): void;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindings(request: google.cloud.securitycenter.v1.IListFindingsRequest): Promise<google.cloud.securitycenter.v1.ListFindingsResponse>;

                    /**
                     * Calls ListSources.
                     * @param request ListSourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSourcesResponse
                     */
                    public listSources(request: google.cloud.securitycenter.v1.IListSourcesRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.ListSourcesCallback): void;

                    /**
                     * Calls ListSources.
                     * @param request ListSourcesRequest message or plain object
                     * @returns Promise
                     */
                    public listSources(request: google.cloud.securitycenter.v1.IListSourcesRequest): Promise<google.cloud.securitycenter.v1.ListSourcesResponse>;

                    /**
                     * Calls RunAssetDiscovery.
                     * @param request RunAssetDiscoveryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public runAssetDiscovery(request: google.cloud.securitycenter.v1.IRunAssetDiscoveryRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.RunAssetDiscoveryCallback): void;

                    /**
                     * Calls RunAssetDiscovery.
                     * @param request RunAssetDiscoveryRequest message or plain object
                     * @returns Promise
                     */
                    public runAssetDiscovery(request: google.cloud.securitycenter.v1.IRunAssetDiscoveryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetFindingState.
                     * @param request SetFindingStateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public setFindingState(request: google.cloud.securitycenter.v1.ISetFindingStateRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.SetFindingStateCallback): void;

                    /**
                     * Calls SetFindingState.
                     * @param request SetFindingStateRequest message or plain object
                     * @returns Promise
                     */
                    public setFindingState(request: google.cloud.securitycenter.v1.ISetFindingStateRequest): Promise<google.cloud.securitycenter.v1.Finding>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls UpdateFinding.
                     * @param request UpdateFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public updateFinding(request: google.cloud.securitycenter.v1.IUpdateFindingRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.UpdateFindingCallback): void;

                    /**
                     * Calls UpdateFinding.
                     * @param request UpdateFindingRequest message or plain object
                     * @returns Promise
                     */
                    public updateFinding(request: google.cloud.securitycenter.v1.IUpdateFindingRequest): Promise<google.cloud.securitycenter.v1.Finding>;

                    /**
                     * Calls UpdateOrganizationSettings.
                     * @param request UpdateOrganizationSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OrganizationSettings
                     */
                    public updateOrganizationSettings(request: google.cloud.securitycenter.v1.IUpdateOrganizationSettingsRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.UpdateOrganizationSettingsCallback): void;

                    /**
                     * Calls UpdateOrganizationSettings.
                     * @param request UpdateOrganizationSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateOrganizationSettings(request: google.cloud.securitycenter.v1.IUpdateOrganizationSettingsRequest): Promise<google.cloud.securitycenter.v1.OrganizationSettings>;

                    /**
                     * Calls UpdateSource.
                     * @param request UpdateSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public updateSource(request: google.cloud.securitycenter.v1.IUpdateSourceRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.UpdateSourceCallback): void;

                    /**
                     * Calls UpdateSource.
                     * @param request UpdateSourceRequest message or plain object
                     * @returns Promise
                     */
                    public updateSource(request: google.cloud.securitycenter.v1.IUpdateSourceRequest): Promise<google.cloud.securitycenter.v1.Source>;

                    /**
                     * Calls UpdateSecurityMarks.
                     * @param request UpdateSecurityMarksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityMarks
                     */
                    public updateSecurityMarks(request: google.cloud.securitycenter.v1.IUpdateSecurityMarksRequest, callback: google.cloud.securitycenter.v1.SecurityCenter.UpdateSecurityMarksCallback): void;

                    /**
                     * Calls UpdateSecurityMarks.
                     * @param request UpdateSecurityMarksRequest message or plain object
                     * @returns Promise
                     */
                    public updateSecurityMarks(request: google.cloud.securitycenter.v1.IUpdateSecurityMarksRequest): Promise<google.cloud.securitycenter.v1.SecurityMarks>;
                }

                namespace SecurityCenter {

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#createSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type CreateSourceCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#createFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type CreateFindingCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#getOrganizationSettings}.
                     * @param error Error, if any
                     * @param [response] OrganizationSettings
                     */
                    type GetOrganizationSettingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.OrganizationSettings) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#getSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type GetSourceCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#groupAssets}.
                     * @param error Error, if any
                     * @param [response] GroupAssetsResponse
                     */
                    type GroupAssetsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.GroupAssetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#groupFindings}.
                     * @param error Error, if any
                     * @param [response] GroupFindingsResponse
                     */
                    type GroupFindingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.GroupFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#listAssets}.
                     * @param error Error, if any
                     * @param [response] ListAssetsResponse
                     */
                    type ListAssetsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.ListAssetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#listFindings}.
                     * @param error Error, if any
                     * @param [response] ListFindingsResponse
                     */
                    type ListFindingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.ListFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#listSources}.
                     * @param error Error, if any
                     * @param [response] ListSourcesResponse
                     */
                    type ListSourcesCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.ListSourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#runAssetDiscovery}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RunAssetDiscoveryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#setFindingState}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type SetFindingStateCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#updateFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type UpdateFindingCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#updateOrganizationSettings}.
                     * @param error Error, if any
                     * @param [response] OrganizationSettings
                     */
                    type UpdateOrganizationSettingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.OrganizationSettings) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#updateSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type UpdateSourceCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1.SecurityCenter#updateSecurityMarks}.
                     * @param error Error, if any
                     * @param [response] SecurityMarks
                     */
                    type UpdateSecurityMarksCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1.SecurityMarks) => void;
                }

                /** Properties of a CreateFindingRequest. */
                interface ICreateFindingRequest {

                    /** CreateFindingRequest parent */
                    parent?: (string|null);

                    /** CreateFindingRequest findingId */
                    findingId?: (string|null);

                    /** CreateFindingRequest finding */
                    finding?: (google.cloud.securitycenter.v1.IFinding|null);
                }

                /** Represents a CreateFindingRequest. */
                class CreateFindingRequest implements ICreateFindingRequest {

                    /**
                     * Constructs a new CreateFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.ICreateFindingRequest);

                    /** CreateFindingRequest parent. */
                    public parent: string;

                    /** CreateFindingRequest findingId. */
                    public findingId: string;

                    /** CreateFindingRequest finding. */
                    public finding?: (google.cloud.securitycenter.v1.IFinding|null);

                    /**
                     * Creates a new CreateFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFindingRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.ICreateFindingRequest): google.cloud.securitycenter.v1.CreateFindingRequest;

                    /**
                     * Encodes the specified CreateFindingRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.CreateFindingRequest.verify|verify} messages.
                     * @param message CreateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.ICreateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFindingRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.CreateFindingRequest.verify|verify} messages.
                     * @param message CreateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.ICreateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.CreateFindingRequest;

                    /**
                     * Decodes a CreateFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.CreateFindingRequest;

                    /**
                     * Verifies a CreateFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.CreateFindingRequest;

                    /**
                     * Creates a plain object from a CreateFindingRequest message. Also converts values to other types if specified.
                     * @param message CreateFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.CreateFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateSourceRequest. */
                interface ICreateSourceRequest {

                    /** CreateSourceRequest parent */
                    parent?: (string|null);

                    /** CreateSourceRequest source */
                    source?: (google.cloud.securitycenter.v1.ISource|null);
                }

                /** Represents a CreateSourceRequest. */
                class CreateSourceRequest implements ICreateSourceRequest {

                    /**
                     * Constructs a new CreateSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.ICreateSourceRequest);

                    /** CreateSourceRequest parent. */
                    public parent: string;

                    /** CreateSourceRequest source. */
                    public source?: (google.cloud.securitycenter.v1.ISource|null);

                    /**
                     * Creates a new CreateSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSourceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.ICreateSourceRequest): google.cloud.securitycenter.v1.CreateSourceRequest;

                    /**
                     * Encodes the specified CreateSourceRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.CreateSourceRequest.verify|verify} messages.
                     * @param message CreateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.ICreateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSourceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.CreateSourceRequest.verify|verify} messages.
                     * @param message CreateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.ICreateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.CreateSourceRequest;

                    /**
                     * Decodes a CreateSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.CreateSourceRequest;

                    /**
                     * Verifies a CreateSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.CreateSourceRequest;

                    /**
                     * Creates a plain object from a CreateSourceRequest message. Also converts values to other types if specified.
                     * @param message CreateSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.CreateSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetOrganizationSettingsRequest. */
                interface IGetOrganizationSettingsRequest {

                    /** GetOrganizationSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOrganizationSettingsRequest. */
                class GetOrganizationSettingsRequest implements IGetOrganizationSettingsRequest {

                    /**
                     * Constructs a new GetOrganizationSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGetOrganizationSettingsRequest);

                    /** GetOrganizationSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOrganizationSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOrganizationSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGetOrganizationSettingsRequest): google.cloud.securitycenter.v1.GetOrganizationSettingsRequest;

                    /**
                     * Encodes the specified GetOrganizationSettingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.verify|verify} messages.
                     * @param message GetOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGetOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOrganizationSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GetOrganizationSettingsRequest.verify|verify} messages.
                     * @param message GetOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGetOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOrganizationSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GetOrganizationSettingsRequest;

                    /**
                     * Decodes a GetOrganizationSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GetOrganizationSettingsRequest;

                    /**
                     * Verifies a GetOrganizationSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOrganizationSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOrganizationSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GetOrganizationSettingsRequest;

                    /**
                     * Creates a plain object from a GetOrganizationSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetOrganizationSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GetOrganizationSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOrganizationSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSourceRequest. */
                interface IGetSourceRequest {

                    /** GetSourceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSourceRequest. */
                class GetSourceRequest implements IGetSourceRequest {

                    /**
                     * Constructs a new GetSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGetSourceRequest);

                    /** GetSourceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSourceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGetSourceRequest): google.cloud.securitycenter.v1.GetSourceRequest;

                    /**
                     * Encodes the specified GetSourceRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.GetSourceRequest.verify|verify} messages.
                     * @param message GetSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGetSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSourceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GetSourceRequest.verify|verify} messages.
                     * @param message GetSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGetSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GetSourceRequest;

                    /**
                     * Decodes a GetSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GetSourceRequest;

                    /**
                     * Verifies a GetSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GetSourceRequest;

                    /**
                     * Creates a plain object from a GetSourceRequest message. Also converts values to other types if specified.
                     * @param message GetSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GetSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupAssetsRequest. */
                interface IGroupAssetsRequest {

                    /** GroupAssetsRequest parent */
                    parent?: (string|null);

                    /** GroupAssetsRequest filter */
                    filter?: (string|null);

                    /** GroupAssetsRequest groupBy */
                    groupBy?: (string|null);

                    /** GroupAssetsRequest compareDuration */
                    compareDuration?: (google.protobuf.IDuration|null);

                    /** GroupAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsRequest pageToken */
                    pageToken?: (string|null);

                    /** GroupAssetsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a GroupAssetsRequest. */
                class GroupAssetsRequest implements IGroupAssetsRequest {

                    /**
                     * Constructs a new GroupAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGroupAssetsRequest);

                    /** GroupAssetsRequest parent. */
                    public parent: string;

                    /** GroupAssetsRequest filter. */
                    public filter: string;

                    /** GroupAssetsRequest groupBy. */
                    public groupBy: string;

                    /** GroupAssetsRequest compareDuration. */
                    public compareDuration?: (google.protobuf.IDuration|null);

                    /** GroupAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsRequest pageToken. */
                    public pageToken: string;

                    /** GroupAssetsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new GroupAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGroupAssetsRequest): google.cloud.securitycenter.v1.GroupAssetsRequest;

                    /**
                     * Encodes the specified GroupAssetsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.GroupAssetsRequest.verify|verify} messages.
                     * @param message GroupAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGroupAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GroupAssetsRequest.verify|verify} messages.
                     * @param message GroupAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGroupAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GroupAssetsRequest;

                    /**
                     * Decodes a GroupAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GroupAssetsRequest;

                    /**
                     * Verifies a GroupAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GroupAssetsRequest;

                    /**
                     * Creates a plain object from a GroupAssetsRequest message. Also converts values to other types if specified.
                     * @param message GroupAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GroupAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupAssetsResponse. */
                interface IGroupAssetsResponse {

                    /** GroupAssetsResponse groupByResults */
                    groupByResults?: (google.cloud.securitycenter.v1.IGroupResult[]|null);

                    /** GroupAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** GroupAssetsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a GroupAssetsResponse. */
                class GroupAssetsResponse implements IGroupAssetsResponse {

                    /**
                     * Constructs a new GroupAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGroupAssetsResponse);

                    /** GroupAssetsResponse groupByResults. */
                    public groupByResults: google.cloud.securitycenter.v1.IGroupResult[];

                    /** GroupAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** GroupAssetsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new GroupAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGroupAssetsResponse): google.cloud.securitycenter.v1.GroupAssetsResponse;

                    /**
                     * Encodes the specified GroupAssetsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1.GroupAssetsResponse.verify|verify} messages.
                     * @param message GroupAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGroupAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GroupAssetsResponse.verify|verify} messages.
                     * @param message GroupAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGroupAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GroupAssetsResponse;

                    /**
                     * Decodes a GroupAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GroupAssetsResponse;

                    /**
                     * Verifies a GroupAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GroupAssetsResponse;

                    /**
                     * Creates a plain object from a GroupAssetsResponse message. Also converts values to other types if specified.
                     * @param message GroupAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GroupAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupFindingsRequest. */
                interface IGroupFindingsRequest {

                    /** GroupFindingsRequest parent */
                    parent?: (string|null);

                    /** GroupFindingsRequest filter */
                    filter?: (string|null);

                    /** GroupFindingsRequest groupBy */
                    groupBy?: (string|null);

                    /** GroupFindingsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsRequest compareDuration */
                    compareDuration?: (google.protobuf.IDuration|null);

                    /** GroupFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** GroupFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a GroupFindingsRequest. */
                class GroupFindingsRequest implements IGroupFindingsRequest {

                    /**
                     * Constructs a new GroupFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGroupFindingsRequest);

                    /** GroupFindingsRequest parent. */
                    public parent: string;

                    /** GroupFindingsRequest filter. */
                    public filter: string;

                    /** GroupFindingsRequest groupBy. */
                    public groupBy: string;

                    /** GroupFindingsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsRequest compareDuration. */
                    public compareDuration?: (google.protobuf.IDuration|null);

                    /** GroupFindingsRequest pageToken. */
                    public pageToken: string;

                    /** GroupFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new GroupFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGroupFindingsRequest): google.cloud.securitycenter.v1.GroupFindingsRequest;

                    /**
                     * Encodes the specified GroupFindingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.GroupFindingsRequest.verify|verify} messages.
                     * @param message GroupFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGroupFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GroupFindingsRequest.verify|verify} messages.
                     * @param message GroupFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGroupFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GroupFindingsRequest;

                    /**
                     * Decodes a GroupFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GroupFindingsRequest;

                    /**
                     * Verifies a GroupFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GroupFindingsRequest;

                    /**
                     * Creates a plain object from a GroupFindingsRequest message. Also converts values to other types if specified.
                     * @param message GroupFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GroupFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupFindingsResponse. */
                interface IGroupFindingsResponse {

                    /** GroupFindingsResponse groupByResults */
                    groupByResults?: (google.cloud.securitycenter.v1.IGroupResult[]|null);

                    /** GroupFindingsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** GroupFindingsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a GroupFindingsResponse. */
                class GroupFindingsResponse implements IGroupFindingsResponse {

                    /**
                     * Constructs a new GroupFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGroupFindingsResponse);

                    /** GroupFindingsResponse groupByResults. */
                    public groupByResults: google.cloud.securitycenter.v1.IGroupResult[];

                    /** GroupFindingsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** GroupFindingsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new GroupFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGroupFindingsResponse): google.cloud.securitycenter.v1.GroupFindingsResponse;

                    /**
                     * Encodes the specified GroupFindingsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1.GroupFindingsResponse.verify|verify} messages.
                     * @param message GroupFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGroupFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GroupFindingsResponse.verify|verify} messages.
                     * @param message GroupFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGroupFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GroupFindingsResponse;

                    /**
                     * Decodes a GroupFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GroupFindingsResponse;

                    /**
                     * Verifies a GroupFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GroupFindingsResponse;

                    /**
                     * Creates a plain object from a GroupFindingsResponse message. Also converts values to other types if specified.
                     * @param message GroupFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GroupFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupResult. */
                interface IGroupResult {

                    /** GroupResult properties */
                    properties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** GroupResult count */
                    count?: (number|Long|null);
                }

                /** Represents a GroupResult. */
                class GroupResult implements IGroupResult {

                    /**
                     * Constructs a new GroupResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IGroupResult);

                    /** GroupResult properties. */
                    public properties: { [k: string]: google.protobuf.IValue };

                    /** GroupResult count. */
                    public count: (number|Long);

                    /**
                     * Creates a new GroupResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupResult instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IGroupResult): google.cloud.securitycenter.v1.GroupResult;

                    /**
                     * Encodes the specified GroupResult message. Does not implicitly {@link google.cloud.securitycenter.v1.GroupResult.verify|verify} messages.
                     * @param message GroupResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IGroupResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupResult message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.GroupResult.verify|verify} messages.
                     * @param message GroupResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IGroupResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.GroupResult;

                    /**
                     * Decodes a GroupResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.GroupResult;

                    /**
                     * Verifies a GroupResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.GroupResult;

                    /**
                     * Creates a plain object from a GroupResult message. Also converts values to other types if specified.
                     * @param message GroupResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.GroupResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSourcesRequest. */
                interface IListSourcesRequest {

                    /** ListSourcesRequest parent */
                    parent?: (string|null);

                    /** ListSourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSourcesRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListSourcesRequest. */
                class ListSourcesRequest implements IListSourcesRequest {

                    /**
                     * Constructs a new ListSourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IListSourcesRequest);

                    /** ListSourcesRequest parent. */
                    public parent: string;

                    /** ListSourcesRequest pageToken. */
                    public pageToken: string;

                    /** ListSourcesRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListSourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSourcesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IListSourcesRequest): google.cloud.securitycenter.v1.ListSourcesRequest;

                    /**
                     * Encodes the specified ListSourcesRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.ListSourcesRequest.verify|verify} messages.
                     * @param message ListSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IListSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSourcesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListSourcesRequest.verify|verify} messages.
                     * @param message ListSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IListSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListSourcesRequest;

                    /**
                     * Decodes a ListSourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListSourcesRequest;

                    /**
                     * Verifies a ListSourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListSourcesRequest;

                    /**
                     * Creates a plain object from a ListSourcesRequest message. Also converts values to other types if specified.
                     * @param message ListSourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.ListSourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSourcesResponse. */
                interface IListSourcesResponse {

                    /** ListSourcesResponse sources */
                    sources?: (google.cloud.securitycenter.v1.ISource[]|null);

                    /** ListSourcesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSourcesResponse. */
                class ListSourcesResponse implements IListSourcesResponse {

                    /**
                     * Constructs a new ListSourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IListSourcesResponse);

                    /** ListSourcesResponse sources. */
                    public sources: google.cloud.securitycenter.v1.ISource[];

                    /** ListSourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSourcesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IListSourcesResponse): google.cloud.securitycenter.v1.ListSourcesResponse;

                    /**
                     * Encodes the specified ListSourcesResponse message. Does not implicitly {@link google.cloud.securitycenter.v1.ListSourcesResponse.verify|verify} messages.
                     * @param message ListSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IListSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSourcesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListSourcesResponse.verify|verify} messages.
                     * @param message ListSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IListSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListSourcesResponse;

                    /**
                     * Decodes a ListSourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListSourcesResponse;

                    /**
                     * Verifies a ListSourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListSourcesResponse;

                    /**
                     * Creates a plain object from a ListSourcesResponse message. Also converts values to other types if specified.
                     * @param message ListSourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.ListSourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetsRequest. */
                interface IListAssetsRequest {

                    /** ListAssetsRequest parent */
                    parent?: (string|null);

                    /** ListAssetsRequest filter */
                    filter?: (string|null);

                    /** ListAssetsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsRequest compareDuration */
                    compareDuration?: (google.protobuf.IDuration|null);

                    /** ListAssetsRequest fieldMask */
                    fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListAssetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAssetsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListAssetsRequest. */
                class ListAssetsRequest implements IListAssetsRequest {

                    /**
                     * Constructs a new ListAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IListAssetsRequest);

                    /** ListAssetsRequest parent. */
                    public parent: string;

                    /** ListAssetsRequest filter. */
                    public filter: string;

                    /** ListAssetsRequest orderBy. */
                    public orderBy: string;

                    /** ListAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsRequest compareDuration. */
                    public compareDuration?: (google.protobuf.IDuration|null);

                    /** ListAssetsRequest fieldMask. */
                    public fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListAssetsRequest pageToken. */
                    public pageToken: string;

                    /** ListAssetsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IListAssetsRequest): google.cloud.securitycenter.v1.ListAssetsRequest;

                    /**
                     * Encodes the specified ListAssetsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListAssetsRequest;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListAssetsRequest;

                    /**
                     * Verifies a ListAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListAssetsRequest;

                    /**
                     * Creates a plain object from a ListAssetsRequest message. Also converts values to other types if specified.
                     * @param message ListAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.ListAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetsResponse. */
                interface IListAssetsResponse {

                    /** ListAssetsResponse listAssetsResults */
                    listAssetsResults?: (google.cloud.securitycenter.v1.ListAssetsResponse.IListAssetsResult[]|null);

                    /** ListAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAssetsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListAssetsResponse. */
                class ListAssetsResponse implements IListAssetsResponse {

                    /**
                     * Constructs a new ListAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IListAssetsResponse);

                    /** ListAssetsResponse listAssetsResults. */
                    public listAssetsResults: google.cloud.securitycenter.v1.ListAssetsResponse.IListAssetsResult[];

                    /** ListAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAssetsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IListAssetsResponse): google.cloud.securitycenter.v1.ListAssetsResponse;

                    /**
                     * Encodes the specified ListAssetsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListAssetsResponse;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListAssetsResponse;

                    /**
                     * Verifies a ListAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListAssetsResponse;

                    /**
                     * Creates a plain object from a ListAssetsResponse message. Also converts values to other types if specified.
                     * @param message ListAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.ListAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListAssetsResponse {

                    /** Properties of a ListAssetsResult. */
                    interface IListAssetsResult {

                        /** ListAssetsResult asset */
                        asset?: (google.cloud.securitycenter.v1.IAsset|null);

                        /** ListAssetsResult stateChange */
                        stateChange?: (google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange|null);
                    }

                    /** Represents a ListAssetsResult. */
                    class ListAssetsResult implements IListAssetsResult {

                        /**
                         * Constructs a new ListAssetsResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1.ListAssetsResponse.IListAssetsResult);

                        /** ListAssetsResult asset. */
                        public asset?: (google.cloud.securitycenter.v1.IAsset|null);

                        /** ListAssetsResult stateChange. */
                        public stateChange: google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.StateChange;

                        /**
                         * Creates a new ListAssetsResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssetsResult instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1.ListAssetsResponse.IListAssetsResult): google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Encodes the specified ListAssetsResult message. Does not implicitly {@link google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.verify|verify} messages.
                         * @param message ListAssetsResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1.ListAssetsResponse.IListAssetsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssetsResult message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult.verify|verify} messages.
                         * @param message ListAssetsResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1.ListAssetsResponse.IListAssetsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssetsResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssetsResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Decodes a ListAssetsResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssetsResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Verifies a ListAssetsResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssetsResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssetsResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Creates a plain object from a ListAssetsResult message. Also converts values to other types if specified.
                         * @param message ListAssetsResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1.ListAssetsResponse.ListAssetsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssetsResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ListAssetsResult {

                        /** StateChange enum. */
                        enum StateChange {
                            UNUSED = 0,
                            ADDED = 1,
                            REMOVED = 2,
                            ACTIVE = 3
                        }
                    }
                }

                /** Properties of a ListFindingsRequest. */
                interface IListFindingsRequest {

                    /** ListFindingsRequest parent */
                    parent?: (string|null);

                    /** ListFindingsRequest filter */
                    filter?: (string|null);

                    /** ListFindingsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListFindingsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsRequest compareDuration */
                    compareDuration?: (google.protobuf.IDuration|null);

                    /** ListFindingsRequest fieldMask */
                    fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListFindingsRequest. */
                class ListFindingsRequest implements IListFindingsRequest {

                    /**
                     * Constructs a new ListFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IListFindingsRequest);

                    /** ListFindingsRequest parent. */
                    public parent: string;

                    /** ListFindingsRequest filter. */
                    public filter: string;

                    /** ListFindingsRequest orderBy. */
                    public orderBy: string;

                    /** ListFindingsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsRequest compareDuration. */
                    public compareDuration?: (google.protobuf.IDuration|null);

                    /** ListFindingsRequest fieldMask. */
                    public fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListFindingsRequest pageToken. */
                    public pageToken: string;

                    /** ListFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IListFindingsRequest): google.cloud.securitycenter.v1.ListFindingsRequest;

                    /**
                     * Encodes the specified ListFindingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListFindingsRequest;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListFindingsRequest;

                    /**
                     * Verifies a ListFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListFindingsRequest;

                    /**
                     * Creates a plain object from a ListFindingsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.ListFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsResponse. */
                interface IListFindingsResponse {

                    /** ListFindingsResponse listFindingsResults */
                    listFindingsResults?: (google.cloud.securitycenter.v1.ListFindingsResponse.IListFindingsResult[]|null);

                    /** ListFindingsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListFindingsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListFindingsResponse. */
                class ListFindingsResponse implements IListFindingsResponse {

                    /**
                     * Constructs a new ListFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IListFindingsResponse);

                    /** ListFindingsResponse listFindingsResults. */
                    public listFindingsResults: google.cloud.securitycenter.v1.ListFindingsResponse.IListFindingsResult[];

                    /** ListFindingsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListFindingsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IListFindingsResponse): google.cloud.securitycenter.v1.ListFindingsResponse;

                    /**
                     * Encodes the specified ListFindingsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListFindingsResponse;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListFindingsResponse;

                    /**
                     * Verifies a ListFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListFindingsResponse;

                    /**
                     * Creates a plain object from a ListFindingsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.ListFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListFindingsResponse {

                    /** Properties of a ListFindingsResult. */
                    interface IListFindingsResult {

                        /** ListFindingsResult finding */
                        finding?: (google.cloud.securitycenter.v1.IFinding|null);

                        /** ListFindingsResult stateChange */
                        stateChange?: (google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange|null);
                    }

                    /** Represents a ListFindingsResult. */
                    class ListFindingsResult implements IListFindingsResult {

                        /**
                         * Constructs a new ListFindingsResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1.ListFindingsResponse.IListFindingsResult);

                        /** ListFindingsResult finding. */
                        public finding?: (google.cloud.securitycenter.v1.IFinding|null);

                        /** ListFindingsResult stateChange. */
                        public stateChange: google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.StateChange;

                        /**
                         * Creates a new ListFindingsResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListFindingsResult instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1.ListFindingsResponse.IListFindingsResult): google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult;

                        /**
                         * Encodes the specified ListFindingsResult message. Does not implicitly {@link google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.verify|verify} messages.
                         * @param message ListFindingsResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1.ListFindingsResponse.IListFindingsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListFindingsResult message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult.verify|verify} messages.
                         * @param message ListFindingsResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1.ListFindingsResponse.IListFindingsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListFindingsResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListFindingsResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult;

                        /**
                         * Decodes a ListFindingsResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListFindingsResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult;

                        /**
                         * Verifies a ListFindingsResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListFindingsResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListFindingsResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult;

                        /**
                         * Creates a plain object from a ListFindingsResult message. Also converts values to other types if specified.
                         * @param message ListFindingsResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1.ListFindingsResponse.ListFindingsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListFindingsResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ListFindingsResult {

                        /** StateChange enum. */
                        enum StateChange {
                            UNUSED = 0,
                            CHANGED = 1,
                            UNCHANGED = 2,
                            ADDED = 3,
                            REMOVED = 4
                        }
                    }
                }

                /** Properties of a SetFindingStateRequest. */
                interface ISetFindingStateRequest {

                    /** SetFindingStateRequest name */
                    name?: (string|null);

                    /** SetFindingStateRequest state */
                    state?: (google.cloud.securitycenter.v1.Finding.State|null);

                    /** SetFindingStateRequest startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a SetFindingStateRequest. */
                class SetFindingStateRequest implements ISetFindingStateRequest {

                    /**
                     * Constructs a new SetFindingStateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.ISetFindingStateRequest);

                    /** SetFindingStateRequest name. */
                    public name: string;

                    /** SetFindingStateRequest state. */
                    public state: google.cloud.securitycenter.v1.Finding.State;

                    /** SetFindingStateRequest startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new SetFindingStateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetFindingStateRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.ISetFindingStateRequest): google.cloud.securitycenter.v1.SetFindingStateRequest;

                    /**
                     * Encodes the specified SetFindingStateRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.SetFindingStateRequest.verify|verify} messages.
                     * @param message SetFindingStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.ISetFindingStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetFindingStateRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.SetFindingStateRequest.verify|verify} messages.
                     * @param message SetFindingStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.ISetFindingStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetFindingStateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetFindingStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.SetFindingStateRequest;

                    /**
                     * Decodes a SetFindingStateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetFindingStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.SetFindingStateRequest;

                    /**
                     * Verifies a SetFindingStateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetFindingStateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetFindingStateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.SetFindingStateRequest;

                    /**
                     * Creates a plain object from a SetFindingStateRequest message. Also converts values to other types if specified.
                     * @param message SetFindingStateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.SetFindingStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetFindingStateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunAssetDiscoveryRequest. */
                interface IRunAssetDiscoveryRequest {

                    /** RunAssetDiscoveryRequest parent */
                    parent?: (string|null);
                }

                /** Represents a RunAssetDiscoveryRequest. */
                class RunAssetDiscoveryRequest implements IRunAssetDiscoveryRequest {

                    /**
                     * Constructs a new RunAssetDiscoveryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IRunAssetDiscoveryRequest);

                    /** RunAssetDiscoveryRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new RunAssetDiscoveryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunAssetDiscoveryRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IRunAssetDiscoveryRequest): google.cloud.securitycenter.v1.RunAssetDiscoveryRequest;

                    /**
                     * Encodes the specified RunAssetDiscoveryRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.verify|verify} messages.
                     * @param message RunAssetDiscoveryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IRunAssetDiscoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunAssetDiscoveryRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.RunAssetDiscoveryRequest.verify|verify} messages.
                     * @param message RunAssetDiscoveryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IRunAssetDiscoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunAssetDiscoveryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunAssetDiscoveryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.RunAssetDiscoveryRequest;

                    /**
                     * Decodes a RunAssetDiscoveryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunAssetDiscoveryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.RunAssetDiscoveryRequest;

                    /**
                     * Verifies a RunAssetDiscoveryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunAssetDiscoveryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunAssetDiscoveryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.RunAssetDiscoveryRequest;

                    /**
                     * Creates a plain object from a RunAssetDiscoveryRequest message. Also converts values to other types if specified.
                     * @param message RunAssetDiscoveryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.RunAssetDiscoveryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunAssetDiscoveryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFindingRequest. */
                interface IUpdateFindingRequest {

                    /** UpdateFindingRequest finding */
                    finding?: (google.cloud.securitycenter.v1.IFinding|null);

                    /** UpdateFindingRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFindingRequest. */
                class UpdateFindingRequest implements IUpdateFindingRequest {

                    /**
                     * Constructs a new UpdateFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IUpdateFindingRequest);

                    /** UpdateFindingRequest finding. */
                    public finding?: (google.cloud.securitycenter.v1.IFinding|null);

                    /** UpdateFindingRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFindingRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IUpdateFindingRequest): google.cloud.securitycenter.v1.UpdateFindingRequest;

                    /**
                     * Encodes the specified UpdateFindingRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateFindingRequest.verify|verify} messages.
                     * @param message UpdateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IUpdateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFindingRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateFindingRequest.verify|verify} messages.
                     * @param message UpdateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IUpdateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.UpdateFindingRequest;

                    /**
                     * Decodes an UpdateFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.UpdateFindingRequest;

                    /**
                     * Verifies an UpdateFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.UpdateFindingRequest;

                    /**
                     * Creates a plain object from an UpdateFindingRequest message. Also converts values to other types if specified.
                     * @param message UpdateFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.UpdateFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateOrganizationSettingsRequest. */
                interface IUpdateOrganizationSettingsRequest {

                    /** UpdateOrganizationSettingsRequest organizationSettings */
                    organizationSettings?: (google.cloud.securitycenter.v1.IOrganizationSettings|null);

                    /** UpdateOrganizationSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateOrganizationSettingsRequest. */
                class UpdateOrganizationSettingsRequest implements IUpdateOrganizationSettingsRequest {

                    /**
                     * Constructs a new UpdateOrganizationSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IUpdateOrganizationSettingsRequest);

                    /** UpdateOrganizationSettingsRequest organizationSettings. */
                    public organizationSettings?: (google.cloud.securitycenter.v1.IOrganizationSettings|null);

                    /** UpdateOrganizationSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateOrganizationSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateOrganizationSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IUpdateOrganizationSettingsRequest): google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest;

                    /**
                     * Encodes the specified UpdateOrganizationSettingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.verify|verify} messages.
                     * @param message UpdateOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IUpdateOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateOrganizationSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest.verify|verify} messages.
                     * @param message UpdateOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IUpdateOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateOrganizationSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest;

                    /**
                     * Decodes an UpdateOrganizationSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest;

                    /**
                     * Verifies an UpdateOrganizationSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateOrganizationSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateOrganizationSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest;

                    /**
                     * Creates a plain object from an UpdateOrganizationSettingsRequest message. Also converts values to other types if specified.
                     * @param message UpdateOrganizationSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.UpdateOrganizationSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateOrganizationSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSourceRequest. */
                interface IUpdateSourceRequest {

                    /** UpdateSourceRequest source */
                    source?: (google.cloud.securitycenter.v1.ISource|null);

                    /** UpdateSourceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSourceRequest. */
                class UpdateSourceRequest implements IUpdateSourceRequest {

                    /**
                     * Constructs a new UpdateSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IUpdateSourceRequest);

                    /** UpdateSourceRequest source. */
                    public source?: (google.cloud.securitycenter.v1.ISource|null);

                    /** UpdateSourceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSourceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IUpdateSourceRequest): google.cloud.securitycenter.v1.UpdateSourceRequest;

                    /**
                     * Encodes the specified UpdateSourceRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateSourceRequest.verify|verify} messages.
                     * @param message UpdateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IUpdateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSourceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateSourceRequest.verify|verify} messages.
                     * @param message UpdateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IUpdateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.UpdateSourceRequest;

                    /**
                     * Decodes an UpdateSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.UpdateSourceRequest;

                    /**
                     * Verifies an UpdateSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.UpdateSourceRequest;

                    /**
                     * Creates a plain object from an UpdateSourceRequest message. Also converts values to other types if specified.
                     * @param message UpdateSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.UpdateSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSecurityMarksRequest. */
                interface IUpdateSecurityMarksRequest {

                    /** UpdateSecurityMarksRequest securityMarks */
                    securityMarks?: (google.cloud.securitycenter.v1.ISecurityMarks|null);

                    /** UpdateSecurityMarksRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityMarksRequest startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an UpdateSecurityMarksRequest. */
                class UpdateSecurityMarksRequest implements IUpdateSecurityMarksRequest {

                    /**
                     * Constructs a new UpdateSecurityMarksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IUpdateSecurityMarksRequest);

                    /** UpdateSecurityMarksRequest securityMarks. */
                    public securityMarks?: (google.cloud.securitycenter.v1.ISecurityMarks|null);

                    /** UpdateSecurityMarksRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityMarksRequest startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new UpdateSecurityMarksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSecurityMarksRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IUpdateSecurityMarksRequest): google.cloud.securitycenter.v1.UpdateSecurityMarksRequest;

                    /**
                     * Encodes the specified UpdateSecurityMarksRequest message. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.verify|verify} messages.
                     * @param message UpdateSecurityMarksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IUpdateSecurityMarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSecurityMarksRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.UpdateSecurityMarksRequest.verify|verify} messages.
                     * @param message UpdateSecurityMarksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IUpdateSecurityMarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSecurityMarksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSecurityMarksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.UpdateSecurityMarksRequest;

                    /**
                     * Decodes an UpdateSecurityMarksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSecurityMarksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.UpdateSecurityMarksRequest;

                    /**
                     * Verifies an UpdateSecurityMarksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSecurityMarksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSecurityMarksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.UpdateSecurityMarksRequest;

                    /**
                     * Creates a plain object from an UpdateSecurityMarksRequest message. Also converts values to other types if specified.
                     * @param message UpdateSecurityMarksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.UpdateSecurityMarksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSecurityMarksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset name */
                    name?: (string|null);

                    /** Asset securityCenterProperties */
                    securityCenterProperties?: (google.cloud.securitycenter.v1.Asset.ISecurityCenterProperties|null);

                    /** Asset resourceProperties */
                    resourceProperties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** Asset securityMarks */
                    securityMarks?: (google.cloud.securitycenter.v1.ISecurityMarks|null);

                    /** Asset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Asset updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);

                    /** Asset iamPolicy */
                    iamPolicy?: (google.cloud.securitycenter.v1.Asset.IIamPolicy|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IAsset);

                    /** Asset name. */
                    public name: string;

                    /** Asset securityCenterProperties. */
                    public securityCenterProperties?: (google.cloud.securitycenter.v1.Asset.ISecurityCenterProperties|null);

                    /** Asset resourceProperties. */
                    public resourceProperties: { [k: string]: google.protobuf.IValue };

                    /** Asset securityMarks. */
                    public securityMarks?: (google.cloud.securitycenter.v1.ISecurityMarks|null);

                    /** Asset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Asset updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /** Asset iamPolicy. */
                    public iamPolicy?: (google.cloud.securitycenter.v1.Asset.IIamPolicy|null);

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IAsset): google.cloud.securitycenter.v1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.securitycenter.v1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Asset {

                    /** Properties of a SecurityCenterProperties. */
                    interface ISecurityCenterProperties {

                        /** SecurityCenterProperties resourceName */
                        resourceName?: (string|null);

                        /** SecurityCenterProperties resourceType */
                        resourceType?: (string|null);

                        /** SecurityCenterProperties resourceParent */
                        resourceParent?: (string|null);

                        /** SecurityCenterProperties resourceProject */
                        resourceProject?: (string|null);

                        /** SecurityCenterProperties resourceOwners */
                        resourceOwners?: (string[]|null);
                    }

                    /** Represents a SecurityCenterProperties. */
                    class SecurityCenterProperties implements ISecurityCenterProperties {

                        /**
                         * Constructs a new SecurityCenterProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1.Asset.ISecurityCenterProperties);

                        /** SecurityCenterProperties resourceName. */
                        public resourceName: string;

                        /** SecurityCenterProperties resourceType. */
                        public resourceType: string;

                        /** SecurityCenterProperties resourceParent. */
                        public resourceParent: string;

                        /** SecurityCenterProperties resourceProject. */
                        public resourceProject: string;

                        /** SecurityCenterProperties resourceOwners. */
                        public resourceOwners: string[];

                        /**
                         * Creates a new SecurityCenterProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecurityCenterProperties instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1.Asset.ISecurityCenterProperties): google.cloud.securitycenter.v1.Asset.SecurityCenterProperties;

                        /**
                         * Encodes the specified SecurityCenterProperties message. Does not implicitly {@link google.cloud.securitycenter.v1.Asset.SecurityCenterProperties.verify|verify} messages.
                         * @param message SecurityCenterProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1.Asset.ISecurityCenterProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecurityCenterProperties message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.Asset.SecurityCenterProperties.verify|verify} messages.
                         * @param message SecurityCenterProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1.Asset.ISecurityCenterProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecurityCenterProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecurityCenterProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.Asset.SecurityCenterProperties;

                        /**
                         * Decodes a SecurityCenterProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecurityCenterProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.Asset.SecurityCenterProperties;

                        /**
                         * Verifies a SecurityCenterProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecurityCenterProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecurityCenterProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.Asset.SecurityCenterProperties;

                        /**
                         * Creates a plain object from a SecurityCenterProperties message. Also converts values to other types if specified.
                         * @param message SecurityCenterProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1.Asset.SecurityCenterProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecurityCenterProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    /** Properties of an IamPolicy. */
                    interface IIamPolicy {

                        /** IamPolicy policyBlob */
                        policyBlob?: (string|null);
                    }

                    /** Represents an IamPolicy. */
                    class IamPolicy implements IIamPolicy {

                        /**
                         * Constructs a new IamPolicy.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1.Asset.IIamPolicy);

                        /** IamPolicy policyBlob. */
                        public policyBlob: string;

                        /**
                         * Creates a new IamPolicy instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns IamPolicy instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1.Asset.IIamPolicy): google.cloud.securitycenter.v1.Asset.IamPolicy;

                        /**
                         * Encodes the specified IamPolicy message. Does not implicitly {@link google.cloud.securitycenter.v1.Asset.IamPolicy.verify|verify} messages.
                         * @param message IamPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1.Asset.IIamPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified IamPolicy message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.Asset.IamPolicy.verify|verify} messages.
                         * @param message IamPolicy message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1.Asset.IIamPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an IamPolicy message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns IamPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.Asset.IamPolicy;

                        /**
                         * Decodes an IamPolicy message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns IamPolicy
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.Asset.IamPolicy;

                        /**
                         * Verifies an IamPolicy message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an IamPolicy message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns IamPolicy
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.Asset.IamPolicy;

                        /**
                         * Creates a plain object from an IamPolicy message. Also converts values to other types if specified.
                         * @param message IamPolicy
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1.Asset.IamPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this IamPolicy to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SecurityMarks. */
                interface ISecurityMarks {

                    /** SecurityMarks name */
                    name?: (string|null);

                    /** SecurityMarks marks */
                    marks?: ({ [k: string]: string }|null);
                }

                /** Represents a SecurityMarks. */
                class SecurityMarks implements ISecurityMarks {

                    /**
                     * Constructs a new SecurityMarks.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.ISecurityMarks);

                    /** SecurityMarks name. */
                    public name: string;

                    /** SecurityMarks marks. */
                    public marks: { [k: string]: string };

                    /**
                     * Creates a new SecurityMarks instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityMarks instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.ISecurityMarks): google.cloud.securitycenter.v1.SecurityMarks;

                    /**
                     * Encodes the specified SecurityMarks message. Does not implicitly {@link google.cloud.securitycenter.v1.SecurityMarks.verify|verify} messages.
                     * @param message SecurityMarks message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.ISecurityMarks, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityMarks message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.SecurityMarks.verify|verify} messages.
                     * @param message SecurityMarks message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.ISecurityMarks, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityMarks message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityMarks
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.SecurityMarks;

                    /**
                     * Decodes a SecurityMarks message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityMarks
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.SecurityMarks;

                    /**
                     * Verifies a SecurityMarks message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityMarks message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityMarks
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.SecurityMarks;

                    /**
                     * Creates a plain object from a SecurityMarks message. Also converts values to other types if specified.
                     * @param message SecurityMarks
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.SecurityMarks, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityMarks to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Finding. */
                interface IFinding {

                    /** Finding name */
                    name?: (string|null);

                    /** Finding parent */
                    parent?: (string|null);

                    /** Finding resourceName */
                    resourceName?: (string|null);

                    /** Finding state */
                    state?: (google.cloud.securitycenter.v1.Finding.State|null);

                    /** Finding category */
                    category?: (string|null);

                    /** Finding externalUri */
                    externalUri?: (string|null);

                    /** Finding sourceProperties */
                    sourceProperties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** Finding securityMarks */
                    securityMarks?: (google.cloud.securitycenter.v1.ISecurityMarks|null);

                    /** Finding eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** Finding createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Finding. */
                class Finding implements IFinding {

                    /**
                     * Constructs a new Finding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IFinding);

                    /** Finding name. */
                    public name: string;

                    /** Finding parent. */
                    public parent: string;

                    /** Finding resourceName. */
                    public resourceName: string;

                    /** Finding state. */
                    public state: google.cloud.securitycenter.v1.Finding.State;

                    /** Finding category. */
                    public category: string;

                    /** Finding externalUri. */
                    public externalUri: string;

                    /** Finding sourceProperties. */
                    public sourceProperties: { [k: string]: google.protobuf.IValue };

                    /** Finding securityMarks. */
                    public securityMarks?: (google.cloud.securitycenter.v1.ISecurityMarks|null);

                    /** Finding eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** Finding createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Finding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Finding instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IFinding): google.cloud.securitycenter.v1.Finding;

                    /**
                     * Encodes the specified Finding message. Does not implicitly {@link google.cloud.securitycenter.v1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Finding message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Finding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.Finding;

                    /**
                     * Decodes a Finding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.Finding;

                    /**
                     * Verifies a Finding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Finding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Finding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.Finding;

                    /**
                     * Creates a plain object from a Finding message. Also converts values to other types if specified.
                     * @param message Finding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.Finding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Finding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Finding {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        INACTIVE = 2
                    }
                }

                /** Properties of an OrganizationSettings. */
                interface IOrganizationSettings {

                    /** OrganizationSettings name */
                    name?: (string|null);

                    /** OrganizationSettings enableAssetDiscovery */
                    enableAssetDiscovery?: (boolean|null);

                    /** OrganizationSettings assetDiscoveryConfig */
                    assetDiscoveryConfig?: (google.cloud.securitycenter.v1.OrganizationSettings.IAssetDiscoveryConfig|null);
                }

                /** Represents an OrganizationSettings. */
                class OrganizationSettings implements IOrganizationSettings {

                    /**
                     * Constructs a new OrganizationSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IOrganizationSettings);

                    /** OrganizationSettings name. */
                    public name: string;

                    /** OrganizationSettings enableAssetDiscovery. */
                    public enableAssetDiscovery: boolean;

                    /** OrganizationSettings assetDiscoveryConfig. */
                    public assetDiscoveryConfig?: (google.cloud.securitycenter.v1.OrganizationSettings.IAssetDiscoveryConfig|null);

                    /**
                     * Creates a new OrganizationSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrganizationSettings instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IOrganizationSettings): google.cloud.securitycenter.v1.OrganizationSettings;

                    /**
                     * Encodes the specified OrganizationSettings message. Does not implicitly {@link google.cloud.securitycenter.v1.OrganizationSettings.verify|verify} messages.
                     * @param message OrganizationSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IOrganizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrganizationSettings message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.OrganizationSettings.verify|verify} messages.
                     * @param message OrganizationSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IOrganizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrganizationSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrganizationSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.OrganizationSettings;

                    /**
                     * Decodes an OrganizationSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrganizationSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.OrganizationSettings;

                    /**
                     * Verifies an OrganizationSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrganizationSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrganizationSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.OrganizationSettings;

                    /**
                     * Creates a plain object from an OrganizationSettings message. Also converts values to other types if specified.
                     * @param message OrganizationSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.OrganizationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrganizationSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OrganizationSettings {

                    /** Properties of an AssetDiscoveryConfig. */
                    interface IAssetDiscoveryConfig {

                        /** AssetDiscoveryConfig projectIds */
                        projectIds?: (string[]|null);

                        /** AssetDiscoveryConfig inclusionMode */
                        inclusionMode?: (google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode|null);
                    }

                    /** Represents an AssetDiscoveryConfig. */
                    class AssetDiscoveryConfig implements IAssetDiscoveryConfig {

                        /**
                         * Constructs a new AssetDiscoveryConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1.OrganizationSettings.IAssetDiscoveryConfig);

                        /** AssetDiscoveryConfig projectIds. */
                        public projectIds: string[];

                        /** AssetDiscoveryConfig inclusionMode. */
                        public inclusionMode: google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode;

                        /**
                         * Creates a new AssetDiscoveryConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AssetDiscoveryConfig instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1.OrganizationSettings.IAssetDiscoveryConfig): google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Encodes the specified AssetDiscoveryConfig message. Does not implicitly {@link google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.verify|verify} messages.
                         * @param message AssetDiscoveryConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1.OrganizationSettings.IAssetDiscoveryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AssetDiscoveryConfig message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig.verify|verify} messages.
                         * @param message AssetDiscoveryConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1.OrganizationSettings.IAssetDiscoveryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AssetDiscoveryConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AssetDiscoveryConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Decodes an AssetDiscoveryConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AssetDiscoveryConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Verifies an AssetDiscoveryConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AssetDiscoveryConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AssetDiscoveryConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Creates a plain object from an AssetDiscoveryConfig message. Also converts values to other types if specified.
                         * @param message AssetDiscoveryConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1.OrganizationSettings.AssetDiscoveryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AssetDiscoveryConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace AssetDiscoveryConfig {

                        /** InclusionMode enum. */
                        enum InclusionMode {
                            INCLUSION_MODE_UNSPECIFIED = 0,
                            INCLUDE_ONLY = 1,
                            EXCLUDE = 2
                        }
                    }
                }

                /** Properties of a RunAssetDiscoveryResponse. */
                interface IRunAssetDiscoveryResponse {

                    /** RunAssetDiscoveryResponse state */
                    state?: (google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.State|null);

                    /** RunAssetDiscoveryResponse duration */
                    duration?: (google.protobuf.IDuration|null);
                }

                /** Represents a RunAssetDiscoveryResponse. */
                class RunAssetDiscoveryResponse implements IRunAssetDiscoveryResponse {

                    /**
                     * Constructs a new RunAssetDiscoveryResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.IRunAssetDiscoveryResponse);

                    /** RunAssetDiscoveryResponse state. */
                    public state: google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.State;

                    /** RunAssetDiscoveryResponse duration. */
                    public duration?: (google.protobuf.IDuration|null);

                    /**
                     * Creates a new RunAssetDiscoveryResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunAssetDiscoveryResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.IRunAssetDiscoveryResponse): google.cloud.securitycenter.v1.RunAssetDiscoveryResponse;

                    /**
                     * Encodes the specified RunAssetDiscoveryResponse message. Does not implicitly {@link google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.verify|verify} messages.
                     * @param message RunAssetDiscoveryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.IRunAssetDiscoveryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunAssetDiscoveryResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.RunAssetDiscoveryResponse.verify|verify} messages.
                     * @param message RunAssetDiscoveryResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.IRunAssetDiscoveryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunAssetDiscoveryResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunAssetDiscoveryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.RunAssetDiscoveryResponse;

                    /**
                     * Decodes a RunAssetDiscoveryResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunAssetDiscoveryResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.RunAssetDiscoveryResponse;

                    /**
                     * Verifies a RunAssetDiscoveryResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunAssetDiscoveryResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunAssetDiscoveryResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.RunAssetDiscoveryResponse;

                    /**
                     * Creates a plain object from a RunAssetDiscoveryResponse message. Also converts values to other types if specified.
                     * @param message RunAssetDiscoveryResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.RunAssetDiscoveryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunAssetDiscoveryResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace RunAssetDiscoveryResponse {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        COMPLETED = 1,
                        SUPERSEDED = 2,
                        TERMINATED = 3
                    }
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source name */
                    name?: (string|null);

                    /** Source displayName */
                    displayName?: (string|null);

                    /** Source description */
                    description?: (string|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1.ISource);

                    /** Source name. */
                    public name: string;

                    /** Source displayName. */
                    public displayName: string;

                    /** Source description. */
                    public description: string;

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1.ISource): google.cloud.securitycenter.v1.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.cloud.securitycenter.v1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1.Source;

                    /**
                     * Verifies a Source message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Source message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Source
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }

            /** Namespace v1beta1. */
            namespace v1beta1 {

                /** Represents a SecurityCenter */
                class SecurityCenter extends $protobuf.rpc.Service {

                    /**
                     * Constructs a new SecurityCenter service.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     */
                    constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                    /**
                     * Creates new SecurityCenter service using the specified rpc implementation.
                     * @param rpcImpl RPC implementation
                     * @param [requestDelimited=false] Whether requests are length-delimited
                     * @param [responseDelimited=false] Whether responses are length-delimited
                     * @returns RPC service. Useful where requests and/or responses are streamed.
                     */
                    public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): SecurityCenter;

                    /**
                     * Calls CreateSource.
                     * @param request CreateSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public createSource(request: google.cloud.securitycenter.v1beta1.ICreateSourceRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.CreateSourceCallback): void;

                    /**
                     * Calls CreateSource.
                     * @param request CreateSourceRequest message or plain object
                     * @returns Promise
                     */
                    public createSource(request: google.cloud.securitycenter.v1beta1.ICreateSourceRequest): Promise<google.cloud.securitycenter.v1beta1.Source>;

                    /**
                     * Calls CreateFinding.
                     * @param request CreateFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public createFinding(request: google.cloud.securitycenter.v1beta1.ICreateFindingRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.CreateFindingCallback): void;

                    /**
                     * Calls CreateFinding.
                     * @param request CreateFindingRequest message or plain object
                     * @returns Promise
                     */
                    public createFinding(request: google.cloud.securitycenter.v1beta1.ICreateFindingRequest): Promise<google.cloud.securitycenter.v1beta1.Finding>;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.GetIamPolicyCallback): void;

                    /**
                     * Calls GetIamPolicy.
                     * @param request GetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls GetOrganizationSettings.
                     * @param request GetOrganizationSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OrganizationSettings
                     */
                    public getOrganizationSettings(request: google.cloud.securitycenter.v1beta1.IGetOrganizationSettingsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.GetOrganizationSettingsCallback): void;

                    /**
                     * Calls GetOrganizationSettings.
                     * @param request GetOrganizationSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public getOrganizationSettings(request: google.cloud.securitycenter.v1beta1.IGetOrganizationSettingsRequest): Promise<google.cloud.securitycenter.v1beta1.OrganizationSettings>;

                    /**
                     * Calls GetSource.
                     * @param request GetSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public getSource(request: google.cloud.securitycenter.v1beta1.IGetSourceRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.GetSourceCallback): void;

                    /**
                     * Calls GetSource.
                     * @param request GetSourceRequest message or plain object
                     * @returns Promise
                     */
                    public getSource(request: google.cloud.securitycenter.v1beta1.IGetSourceRequest): Promise<google.cloud.securitycenter.v1beta1.Source>;

                    /**
                     * Calls GroupAssets.
                     * @param request GroupAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GroupAssetsResponse
                     */
                    public groupAssets(request: google.cloud.securitycenter.v1beta1.IGroupAssetsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.GroupAssetsCallback): void;

                    /**
                     * Calls GroupAssets.
                     * @param request GroupAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public groupAssets(request: google.cloud.securitycenter.v1beta1.IGroupAssetsRequest): Promise<google.cloud.securitycenter.v1beta1.GroupAssetsResponse>;

                    /**
                     * Calls GroupFindings.
                     * @param request GroupFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and GroupFindingsResponse
                     */
                    public groupFindings(request: google.cloud.securitycenter.v1beta1.IGroupFindingsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.GroupFindingsCallback): void;

                    /**
                     * Calls GroupFindings.
                     * @param request GroupFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public groupFindings(request: google.cloud.securitycenter.v1beta1.IGroupFindingsRequest): Promise<google.cloud.securitycenter.v1beta1.GroupFindingsResponse>;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListAssetsResponse
                     */
                    public listAssets(request: google.cloud.securitycenter.v1beta1.IListAssetsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.ListAssetsCallback): void;

                    /**
                     * Calls ListAssets.
                     * @param request ListAssetsRequest message or plain object
                     * @returns Promise
                     */
                    public listAssets(request: google.cloud.securitycenter.v1beta1.IListAssetsRequest): Promise<google.cloud.securitycenter.v1beta1.ListAssetsResponse>;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListFindingsResponse
                     */
                    public listFindings(request: google.cloud.securitycenter.v1beta1.IListFindingsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.ListFindingsCallback): void;

                    /**
                     * Calls ListFindings.
                     * @param request ListFindingsRequest message or plain object
                     * @returns Promise
                     */
                    public listFindings(request: google.cloud.securitycenter.v1beta1.IListFindingsRequest): Promise<google.cloud.securitycenter.v1beta1.ListFindingsResponse>;

                    /**
                     * Calls ListSources.
                     * @param request ListSourcesRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and ListSourcesResponse
                     */
                    public listSources(request: google.cloud.securitycenter.v1beta1.IListSourcesRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.ListSourcesCallback): void;

                    /**
                     * Calls ListSources.
                     * @param request ListSourcesRequest message or plain object
                     * @returns Promise
                     */
                    public listSources(request: google.cloud.securitycenter.v1beta1.IListSourcesRequest): Promise<google.cloud.securitycenter.v1beta1.ListSourcesResponse>;

                    /**
                     * Calls RunAssetDiscovery.
                     * @param request RunAssetDiscoveryRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Operation
                     */
                    public runAssetDiscovery(request: google.cloud.securitycenter.v1beta1.IRunAssetDiscoveryRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.RunAssetDiscoveryCallback): void;

                    /**
                     * Calls RunAssetDiscovery.
                     * @param request RunAssetDiscoveryRequest message or plain object
                     * @returns Promise
                     */
                    public runAssetDiscovery(request: google.cloud.securitycenter.v1beta1.IRunAssetDiscoveryRequest): Promise<google.longrunning.Operation>;

                    /**
                     * Calls SetFindingState.
                     * @param request SetFindingStateRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public setFindingState(request: google.cloud.securitycenter.v1beta1.ISetFindingStateRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.SetFindingStateCallback): void;

                    /**
                     * Calls SetFindingState.
                     * @param request SetFindingStateRequest message or plain object
                     * @returns Promise
                     */
                    public setFindingState(request: google.cloud.securitycenter.v1beta1.ISetFindingStateRequest): Promise<google.cloud.securitycenter.v1beta1.Finding>;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Policy
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.SetIamPolicyCallback): void;

                    /**
                     * Calls SetIamPolicy.
                     * @param request SetIamPolicyRequest message or plain object
                     * @returns Promise
                     */
                    public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.TestIamPermissionsCallback): void;

                    /**
                     * Calls TestIamPermissions.
                     * @param request TestIamPermissionsRequest message or plain object
                     * @returns Promise
                     */
                    public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;

                    /**
                     * Calls UpdateFinding.
                     * @param request UpdateFindingRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Finding
                     */
                    public updateFinding(request: google.cloud.securitycenter.v1beta1.IUpdateFindingRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.UpdateFindingCallback): void;

                    /**
                     * Calls UpdateFinding.
                     * @param request UpdateFindingRequest message or plain object
                     * @returns Promise
                     */
                    public updateFinding(request: google.cloud.securitycenter.v1beta1.IUpdateFindingRequest): Promise<google.cloud.securitycenter.v1beta1.Finding>;

                    /**
                     * Calls UpdateOrganizationSettings.
                     * @param request UpdateOrganizationSettingsRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and OrganizationSettings
                     */
                    public updateOrganizationSettings(request: google.cloud.securitycenter.v1beta1.IUpdateOrganizationSettingsRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.UpdateOrganizationSettingsCallback): void;

                    /**
                     * Calls UpdateOrganizationSettings.
                     * @param request UpdateOrganizationSettingsRequest message or plain object
                     * @returns Promise
                     */
                    public updateOrganizationSettings(request: google.cloud.securitycenter.v1beta1.IUpdateOrganizationSettingsRequest): Promise<google.cloud.securitycenter.v1beta1.OrganizationSettings>;

                    /**
                     * Calls UpdateSource.
                     * @param request UpdateSourceRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and Source
                     */
                    public updateSource(request: google.cloud.securitycenter.v1beta1.IUpdateSourceRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.UpdateSourceCallback): void;

                    /**
                     * Calls UpdateSource.
                     * @param request UpdateSourceRequest message or plain object
                     * @returns Promise
                     */
                    public updateSource(request: google.cloud.securitycenter.v1beta1.IUpdateSourceRequest): Promise<google.cloud.securitycenter.v1beta1.Source>;

                    /**
                     * Calls UpdateSecurityMarks.
                     * @param request UpdateSecurityMarksRequest message or plain object
                     * @param callback Node-style callback called with the error, if any, and SecurityMarks
                     */
                    public updateSecurityMarks(request: google.cloud.securitycenter.v1beta1.IUpdateSecurityMarksRequest, callback: google.cloud.securitycenter.v1beta1.SecurityCenter.UpdateSecurityMarksCallback): void;

                    /**
                     * Calls UpdateSecurityMarks.
                     * @param request UpdateSecurityMarksRequest message or plain object
                     * @returns Promise
                     */
                    public updateSecurityMarks(request: google.cloud.securitycenter.v1beta1.IUpdateSecurityMarksRequest): Promise<google.cloud.securitycenter.v1beta1.SecurityMarks>;
                }

                namespace SecurityCenter {

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#createSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type CreateSourceCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#createFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type CreateFindingCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#getIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#getOrganizationSettings}.
                     * @param error Error, if any
                     * @param [response] OrganizationSettings
                     */
                    type GetOrganizationSettingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.OrganizationSettings) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#getSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type GetSourceCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#groupAssets}.
                     * @param error Error, if any
                     * @param [response] GroupAssetsResponse
                     */
                    type GroupAssetsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.GroupAssetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#groupFindings}.
                     * @param error Error, if any
                     * @param [response] GroupFindingsResponse
                     */
                    type GroupFindingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.GroupFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#listAssets}.
                     * @param error Error, if any
                     * @param [response] ListAssetsResponse
                     */
                    type ListAssetsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.ListAssetsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#listFindings}.
                     * @param error Error, if any
                     * @param [response] ListFindingsResponse
                     */
                    type ListFindingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.ListFindingsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#listSources}.
                     * @param error Error, if any
                     * @param [response] ListSourcesResponse
                     */
                    type ListSourcesCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.ListSourcesResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#runAssetDiscovery}.
                     * @param error Error, if any
                     * @param [response] Operation
                     */
                    type RunAssetDiscoveryCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#setFindingState}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type SetFindingStateCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#setIamPolicy}.
                     * @param error Error, if any
                     * @param [response] Policy
                     */
                    type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#testIamPermissions}.
                     * @param error Error, if any
                     * @param [response] TestIamPermissionsResponse
                     */
                    type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#updateFinding}.
                     * @param error Error, if any
                     * @param [response] Finding
                     */
                    type UpdateFindingCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.Finding) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#updateOrganizationSettings}.
                     * @param error Error, if any
                     * @param [response] OrganizationSettings
                     */
                    type UpdateOrganizationSettingsCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.OrganizationSettings) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#updateSource}.
                     * @param error Error, if any
                     * @param [response] Source
                     */
                    type UpdateSourceCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.Source) => void;

                    /**
                     * Callback as used by {@link google.cloud.securitycenter.v1beta1.SecurityCenter#updateSecurityMarks}.
                     * @param error Error, if any
                     * @param [response] SecurityMarks
                     */
                    type UpdateSecurityMarksCallback = (error: (Error|null), response?: google.cloud.securitycenter.v1beta1.SecurityMarks) => void;
                }

                /** Properties of a CreateFindingRequest. */
                interface ICreateFindingRequest {

                    /** CreateFindingRequest parent */
                    parent?: (string|null);

                    /** CreateFindingRequest findingId */
                    findingId?: (string|null);

                    /** CreateFindingRequest finding */
                    finding?: (google.cloud.securitycenter.v1beta1.IFinding|null);
                }

                /** Represents a CreateFindingRequest. */
                class CreateFindingRequest implements ICreateFindingRequest {

                    /**
                     * Constructs a new CreateFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.ICreateFindingRequest);

                    /** CreateFindingRequest parent. */
                    public parent: string;

                    /** CreateFindingRequest findingId. */
                    public findingId: string;

                    /** CreateFindingRequest finding. */
                    public finding?: (google.cloud.securitycenter.v1beta1.IFinding|null);

                    /**
                     * Creates a new CreateFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateFindingRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.ICreateFindingRequest): google.cloud.securitycenter.v1beta1.CreateFindingRequest;

                    /**
                     * Encodes the specified CreateFindingRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.CreateFindingRequest.verify|verify} messages.
                     * @param message CreateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.ICreateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateFindingRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.CreateFindingRequest.verify|verify} messages.
                     * @param message CreateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.ICreateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.CreateFindingRequest;

                    /**
                     * Decodes a CreateFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.CreateFindingRequest;

                    /**
                     * Verifies a CreateFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.CreateFindingRequest;

                    /**
                     * Creates a plain object from a CreateFindingRequest message. Also converts values to other types if specified.
                     * @param message CreateFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.CreateFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a CreateSourceRequest. */
                interface ICreateSourceRequest {

                    /** CreateSourceRequest parent */
                    parent?: (string|null);

                    /** CreateSourceRequest source */
                    source?: (google.cloud.securitycenter.v1beta1.ISource|null);
                }

                /** Represents a CreateSourceRequest. */
                class CreateSourceRequest implements ICreateSourceRequest {

                    /**
                     * Constructs a new CreateSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.ICreateSourceRequest);

                    /** CreateSourceRequest parent. */
                    public parent: string;

                    /** CreateSourceRequest source. */
                    public source?: (google.cloud.securitycenter.v1beta1.ISource|null);

                    /**
                     * Creates a new CreateSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns CreateSourceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.ICreateSourceRequest): google.cloud.securitycenter.v1beta1.CreateSourceRequest;

                    /**
                     * Encodes the specified CreateSourceRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.CreateSourceRequest.verify|verify} messages.
                     * @param message CreateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.ICreateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified CreateSourceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.CreateSourceRequest.verify|verify} messages.
                     * @param message CreateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.ICreateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a CreateSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns CreateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.CreateSourceRequest;

                    /**
                     * Decodes a CreateSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns CreateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.CreateSourceRequest;

                    /**
                     * Verifies a CreateSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a CreateSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns CreateSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.CreateSourceRequest;

                    /**
                     * Creates a plain object from a CreateSourceRequest message. Also converts values to other types if specified.
                     * @param message CreateSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.CreateSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this CreateSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetOrganizationSettingsRequest. */
                interface IGetOrganizationSettingsRequest {

                    /** GetOrganizationSettingsRequest name */
                    name?: (string|null);
                }

                /** Represents a GetOrganizationSettingsRequest. */
                class GetOrganizationSettingsRequest implements IGetOrganizationSettingsRequest {

                    /**
                     * Constructs a new GetOrganizationSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGetOrganizationSettingsRequest);

                    /** GetOrganizationSettingsRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetOrganizationSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetOrganizationSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGetOrganizationSettingsRequest): google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest;

                    /**
                     * Encodes the specified GetOrganizationSettingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest.verify|verify} messages.
                     * @param message GetOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGetOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetOrganizationSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest.verify|verify} messages.
                     * @param message GetOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGetOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetOrganizationSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest;

                    /**
                     * Decodes a GetOrganizationSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest;

                    /**
                     * Verifies a GetOrganizationSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetOrganizationSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetOrganizationSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest;

                    /**
                     * Creates a plain object from a GetOrganizationSettingsRequest message. Also converts values to other types if specified.
                     * @param message GetOrganizationSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GetOrganizationSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetOrganizationSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GetSourceRequest. */
                interface IGetSourceRequest {

                    /** GetSourceRequest name */
                    name?: (string|null);
                }

                /** Represents a GetSourceRequest. */
                class GetSourceRequest implements IGetSourceRequest {

                    /**
                     * Constructs a new GetSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGetSourceRequest);

                    /** GetSourceRequest name. */
                    public name: string;

                    /**
                     * Creates a new GetSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GetSourceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGetSourceRequest): google.cloud.securitycenter.v1beta1.GetSourceRequest;

                    /**
                     * Encodes the specified GetSourceRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GetSourceRequest.verify|verify} messages.
                     * @param message GetSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGetSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GetSourceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GetSourceRequest.verify|verify} messages.
                     * @param message GetSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGetSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GetSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GetSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GetSourceRequest;

                    /**
                     * Decodes a GetSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GetSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GetSourceRequest;

                    /**
                     * Verifies a GetSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GetSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GetSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GetSourceRequest;

                    /**
                     * Creates a plain object from a GetSourceRequest message. Also converts values to other types if specified.
                     * @param message GetSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GetSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GetSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupAssetsRequest. */
                interface IGroupAssetsRequest {

                    /** GroupAssetsRequest parent */
                    parent?: (string|null);

                    /** GroupAssetsRequest filter */
                    filter?: (string|null);

                    /** GroupAssetsRequest groupBy */
                    groupBy?: (string|null);

                    /** GroupAssetsRequest compareDuration */
                    compareDuration?: (google.protobuf.IDuration|null);

                    /** GroupAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsRequest pageToken */
                    pageToken?: (string|null);

                    /** GroupAssetsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a GroupAssetsRequest. */
                class GroupAssetsRequest implements IGroupAssetsRequest {

                    /**
                     * Constructs a new GroupAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGroupAssetsRequest);

                    /** GroupAssetsRequest parent. */
                    public parent: string;

                    /** GroupAssetsRequest filter. */
                    public filter: string;

                    /** GroupAssetsRequest groupBy. */
                    public groupBy: string;

                    /** GroupAssetsRequest compareDuration. */
                    public compareDuration?: (google.protobuf.IDuration|null);

                    /** GroupAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsRequest pageToken. */
                    public pageToken: string;

                    /** GroupAssetsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new GroupAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGroupAssetsRequest): google.cloud.securitycenter.v1beta1.GroupAssetsRequest;

                    /**
                     * Encodes the specified GroupAssetsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupAssetsRequest.verify|verify} messages.
                     * @param message GroupAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGroupAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupAssetsRequest.verify|verify} messages.
                     * @param message GroupAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGroupAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GroupAssetsRequest;

                    /**
                     * Decodes a GroupAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GroupAssetsRequest;

                    /**
                     * Verifies a GroupAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GroupAssetsRequest;

                    /**
                     * Creates a plain object from a GroupAssetsRequest message. Also converts values to other types if specified.
                     * @param message GroupAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GroupAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupAssetsResponse. */
                interface IGroupAssetsResponse {

                    /** GroupAssetsResponse groupByResults */
                    groupByResults?: (google.cloud.securitycenter.v1beta1.IGroupResult[]|null);

                    /** GroupAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a GroupAssetsResponse. */
                class GroupAssetsResponse implements IGroupAssetsResponse {

                    /**
                     * Constructs a new GroupAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGroupAssetsResponse);

                    /** GroupAssetsResponse groupByResults. */
                    public groupByResults: google.cloud.securitycenter.v1beta1.IGroupResult[];

                    /** GroupAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupAssetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new GroupAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGroupAssetsResponse): google.cloud.securitycenter.v1beta1.GroupAssetsResponse;

                    /**
                     * Encodes the specified GroupAssetsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupAssetsResponse.verify|verify} messages.
                     * @param message GroupAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGroupAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupAssetsResponse.verify|verify} messages.
                     * @param message GroupAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGroupAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GroupAssetsResponse;

                    /**
                     * Decodes a GroupAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GroupAssetsResponse;

                    /**
                     * Verifies a GroupAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GroupAssetsResponse;

                    /**
                     * Creates a plain object from a GroupAssetsResponse message. Also converts values to other types if specified.
                     * @param message GroupAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GroupAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupFindingsRequest. */
                interface IGroupFindingsRequest {

                    /** GroupFindingsRequest parent */
                    parent?: (string|null);

                    /** GroupFindingsRequest filter */
                    filter?: (string|null);

                    /** GroupFindingsRequest groupBy */
                    groupBy?: (string|null);

                    /** GroupFindingsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** GroupFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a GroupFindingsRequest. */
                class GroupFindingsRequest implements IGroupFindingsRequest {

                    /**
                     * Constructs a new GroupFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGroupFindingsRequest);

                    /** GroupFindingsRequest parent. */
                    public parent: string;

                    /** GroupFindingsRequest filter. */
                    public filter: string;

                    /** GroupFindingsRequest groupBy. */
                    public groupBy: string;

                    /** GroupFindingsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsRequest pageToken. */
                    public pageToken: string;

                    /** GroupFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new GroupFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGroupFindingsRequest): google.cloud.securitycenter.v1beta1.GroupFindingsRequest;

                    /**
                     * Encodes the specified GroupFindingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupFindingsRequest.verify|verify} messages.
                     * @param message GroupFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGroupFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupFindingsRequest.verify|verify} messages.
                     * @param message GroupFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGroupFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GroupFindingsRequest;

                    /**
                     * Decodes a GroupFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GroupFindingsRequest;

                    /**
                     * Verifies a GroupFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GroupFindingsRequest;

                    /**
                     * Creates a plain object from a GroupFindingsRequest message. Also converts values to other types if specified.
                     * @param message GroupFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GroupFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupFindingsResponse. */
                interface IGroupFindingsResponse {

                    /** GroupFindingsResponse groupByResults */
                    groupByResults?: (google.cloud.securitycenter.v1beta1.IGroupResult[]|null);

                    /** GroupFindingsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a GroupFindingsResponse. */
                class GroupFindingsResponse implements IGroupFindingsResponse {

                    /**
                     * Constructs a new GroupFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGroupFindingsResponse);

                    /** GroupFindingsResponse groupByResults. */
                    public groupByResults: google.cloud.securitycenter.v1beta1.IGroupResult[];

                    /** GroupFindingsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** GroupFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new GroupFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGroupFindingsResponse): google.cloud.securitycenter.v1beta1.GroupFindingsResponse;

                    /**
                     * Encodes the specified GroupFindingsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupFindingsResponse.verify|verify} messages.
                     * @param message GroupFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGroupFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupFindingsResponse.verify|verify} messages.
                     * @param message GroupFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGroupFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GroupFindingsResponse;

                    /**
                     * Decodes a GroupFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GroupFindingsResponse;

                    /**
                     * Verifies a GroupFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GroupFindingsResponse;

                    /**
                     * Creates a plain object from a GroupFindingsResponse message. Also converts values to other types if specified.
                     * @param message GroupFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GroupFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a GroupResult. */
                interface IGroupResult {

                    /** GroupResult properties */
                    properties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** GroupResult count */
                    count?: (number|Long|null);
                }

                /** Represents a GroupResult. */
                class GroupResult implements IGroupResult {

                    /**
                     * Constructs a new GroupResult.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IGroupResult);

                    /** GroupResult properties. */
                    public properties: { [k: string]: google.protobuf.IValue };

                    /** GroupResult count. */
                    public count: (number|Long);

                    /**
                     * Creates a new GroupResult instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns GroupResult instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IGroupResult): google.cloud.securitycenter.v1beta1.GroupResult;

                    /**
                     * Encodes the specified GroupResult message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupResult.verify|verify} messages.
                     * @param message GroupResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IGroupResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified GroupResult message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.GroupResult.verify|verify} messages.
                     * @param message GroupResult message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IGroupResult, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a GroupResult message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns GroupResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.GroupResult;

                    /**
                     * Decodes a GroupResult message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns GroupResult
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.GroupResult;

                    /**
                     * Verifies a GroupResult message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a GroupResult message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns GroupResult
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.GroupResult;

                    /**
                     * Creates a plain object from a GroupResult message. Also converts values to other types if specified.
                     * @param message GroupResult
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.GroupResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this GroupResult to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSourcesRequest. */
                interface IListSourcesRequest {

                    /** ListSourcesRequest parent */
                    parent?: (string|null);

                    /** ListSourcesRequest pageToken */
                    pageToken?: (string|null);

                    /** ListSourcesRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListSourcesRequest. */
                class ListSourcesRequest implements IListSourcesRequest {

                    /**
                     * Constructs a new ListSourcesRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IListSourcesRequest);

                    /** ListSourcesRequest parent. */
                    public parent: string;

                    /** ListSourcesRequest pageToken. */
                    public pageToken: string;

                    /** ListSourcesRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListSourcesRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSourcesRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IListSourcesRequest): google.cloud.securitycenter.v1beta1.ListSourcesRequest;

                    /**
                     * Encodes the specified ListSourcesRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListSourcesRequest.verify|verify} messages.
                     * @param message ListSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IListSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSourcesRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListSourcesRequest.verify|verify} messages.
                     * @param message ListSourcesRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IListSourcesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSourcesRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListSourcesRequest;

                    /**
                     * Decodes a ListSourcesRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSourcesRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListSourcesRequest;

                    /**
                     * Verifies a ListSourcesRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSourcesRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSourcesRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListSourcesRequest;

                    /**
                     * Creates a plain object from a ListSourcesRequest message. Also converts values to other types if specified.
                     * @param message ListSourcesRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.ListSourcesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSourcesRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListSourcesResponse. */
                interface IListSourcesResponse {

                    /** ListSourcesResponse sources */
                    sources?: (google.cloud.securitycenter.v1beta1.ISource[]|null);

                    /** ListSourcesResponse nextPageToken */
                    nextPageToken?: (string|null);
                }

                /** Represents a ListSourcesResponse. */
                class ListSourcesResponse implements IListSourcesResponse {

                    /**
                     * Constructs a new ListSourcesResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IListSourcesResponse);

                    /** ListSourcesResponse sources. */
                    public sources: google.cloud.securitycenter.v1beta1.ISource[];

                    /** ListSourcesResponse nextPageToken. */
                    public nextPageToken: string;

                    /**
                     * Creates a new ListSourcesResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListSourcesResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IListSourcesResponse): google.cloud.securitycenter.v1beta1.ListSourcesResponse;

                    /**
                     * Encodes the specified ListSourcesResponse message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListSourcesResponse.verify|verify} messages.
                     * @param message ListSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IListSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListSourcesResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListSourcesResponse.verify|verify} messages.
                     * @param message ListSourcesResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IListSourcesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListSourcesResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListSourcesResponse;

                    /**
                     * Decodes a ListSourcesResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListSourcesResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListSourcesResponse;

                    /**
                     * Verifies a ListSourcesResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListSourcesResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListSourcesResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListSourcesResponse;

                    /**
                     * Creates a plain object from a ListSourcesResponse message. Also converts values to other types if specified.
                     * @param message ListSourcesResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.ListSourcesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListSourcesResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetsRequest. */
                interface IListAssetsRequest {

                    /** ListAssetsRequest parent */
                    parent?: (string|null);

                    /** ListAssetsRequest filter */
                    filter?: (string|null);

                    /** ListAssetsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListAssetsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsRequest compareDuration */
                    compareDuration?: (google.protobuf.IDuration|null);

                    /** ListAssetsRequest fieldMask */
                    fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListAssetsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListAssetsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListAssetsRequest. */
                class ListAssetsRequest implements IListAssetsRequest {

                    /**
                     * Constructs a new ListAssetsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IListAssetsRequest);

                    /** ListAssetsRequest parent. */
                    public parent: string;

                    /** ListAssetsRequest filter. */
                    public filter: string;

                    /** ListAssetsRequest orderBy. */
                    public orderBy: string;

                    /** ListAssetsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsRequest compareDuration. */
                    public compareDuration?: (google.protobuf.IDuration|null);

                    /** ListAssetsRequest fieldMask. */
                    public fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListAssetsRequest pageToken. */
                    public pageToken: string;

                    /** ListAssetsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListAssetsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IListAssetsRequest): google.cloud.securitycenter.v1beta1.ListAssetsRequest;

                    /**
                     * Encodes the specified ListAssetsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListAssetsRequest.verify|verify} messages.
                     * @param message ListAssetsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IListAssetsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListAssetsRequest;

                    /**
                     * Decodes a ListAssetsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListAssetsRequest;

                    /**
                     * Verifies a ListAssetsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListAssetsRequest;

                    /**
                     * Creates a plain object from a ListAssetsRequest message. Also converts values to other types if specified.
                     * @param message ListAssetsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.ListAssetsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListAssetsResponse. */
                interface IListAssetsResponse {

                    /** ListAssetsResponse listAssetsResults */
                    listAssetsResults?: (google.cloud.securitycenter.v1beta1.ListAssetsResponse.IListAssetsResult[]|null);

                    /** ListAssetsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListAssetsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListAssetsResponse. */
                class ListAssetsResponse implements IListAssetsResponse {

                    /**
                     * Constructs a new ListAssetsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IListAssetsResponse);

                    /** ListAssetsResponse listAssetsResults. */
                    public listAssetsResults: google.cloud.securitycenter.v1beta1.ListAssetsResponse.IListAssetsResult[];

                    /** ListAssetsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListAssetsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListAssetsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListAssetsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListAssetsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IListAssetsResponse): google.cloud.securitycenter.v1beta1.ListAssetsResponse;

                    /**
                     * Encodes the specified ListAssetsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListAssetsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListAssetsResponse.verify|verify} messages.
                     * @param message ListAssetsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IListAssetsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListAssetsResponse;

                    /**
                     * Decodes a ListAssetsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListAssetsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListAssetsResponse;

                    /**
                     * Verifies a ListAssetsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListAssetsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListAssetsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListAssetsResponse;

                    /**
                     * Creates a plain object from a ListAssetsResponse message. Also converts values to other types if specified.
                     * @param message ListAssetsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.ListAssetsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListAssetsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace ListAssetsResponse {

                    /** Properties of a ListAssetsResult. */
                    interface IListAssetsResult {

                        /** ListAssetsResult asset */
                        asset?: (google.cloud.securitycenter.v1beta1.IAsset|null);

                        /** ListAssetsResult state */
                        state?: (google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.State|null);
                    }

                    /** Represents a ListAssetsResult. */
                    class ListAssetsResult implements IListAssetsResult {

                        /**
                         * Constructs a new ListAssetsResult.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1beta1.ListAssetsResponse.IListAssetsResult);

                        /** ListAssetsResult asset. */
                        public asset?: (google.cloud.securitycenter.v1beta1.IAsset|null);

                        /** ListAssetsResult state. */
                        public state: google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.State;

                        /**
                         * Creates a new ListAssetsResult instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns ListAssetsResult instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1beta1.ListAssetsResponse.IListAssetsResult): google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Encodes the specified ListAssetsResult message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.verify|verify} messages.
                         * @param message ListAssetsResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1beta1.ListAssetsResponse.IListAssetsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified ListAssetsResult message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult.verify|verify} messages.
                         * @param message ListAssetsResult message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.ListAssetsResponse.IListAssetsResult, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a ListAssetsResult message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns ListAssetsResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Decodes a ListAssetsResult message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns ListAssetsResult
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Verifies a ListAssetsResult message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a ListAssetsResult message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns ListAssetsResult
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult;

                        /**
                         * Creates a plain object from a ListAssetsResult message. Also converts values to other types if specified.
                         * @param message ListAssetsResult
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1beta1.ListAssetsResponse.ListAssetsResult, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this ListAssetsResult to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace ListAssetsResult {

                        /** State enum. */
                        enum State {
                            STATE_UNSPECIFIED = 0,
                            UNUSED = 1,
                            ADDED = 2,
                            REMOVED = 3,
                            ACTIVE = 4
                        }
                    }
                }

                /** Properties of a ListFindingsRequest. */
                interface IListFindingsRequest {

                    /** ListFindingsRequest parent */
                    parent?: (string|null);

                    /** ListFindingsRequest filter */
                    filter?: (string|null);

                    /** ListFindingsRequest orderBy */
                    orderBy?: (string|null);

                    /** ListFindingsRequest readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsRequest fieldMask */
                    fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListFindingsRequest pageToken */
                    pageToken?: (string|null);

                    /** ListFindingsRequest pageSize */
                    pageSize?: (number|null);
                }

                /** Represents a ListFindingsRequest. */
                class ListFindingsRequest implements IListFindingsRequest {

                    /**
                     * Constructs a new ListFindingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IListFindingsRequest);

                    /** ListFindingsRequest parent. */
                    public parent: string;

                    /** ListFindingsRequest filter. */
                    public filter: string;

                    /** ListFindingsRequest orderBy. */
                    public orderBy: string;

                    /** ListFindingsRequest readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsRequest fieldMask. */
                    public fieldMask?: (google.protobuf.IFieldMask|null);

                    /** ListFindingsRequest pageToken. */
                    public pageToken: string;

                    /** ListFindingsRequest pageSize. */
                    public pageSize: number;

                    /**
                     * Creates a new ListFindingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IListFindingsRequest): google.cloud.securitycenter.v1beta1.ListFindingsRequest;

                    /**
                     * Encodes the specified ListFindingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListFindingsRequest.verify|verify} messages.
                     * @param message ListFindingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IListFindingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListFindingsRequest;

                    /**
                     * Decodes a ListFindingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListFindingsRequest;

                    /**
                     * Verifies a ListFindingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListFindingsRequest;

                    /**
                     * Creates a plain object from a ListFindingsRequest message. Also converts values to other types if specified.
                     * @param message ListFindingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.ListFindingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a ListFindingsResponse. */
                interface IListFindingsResponse {

                    /** ListFindingsResponse findings */
                    findings?: (google.cloud.securitycenter.v1beta1.IFinding[]|null);

                    /** ListFindingsResponse readTime */
                    readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsResponse nextPageToken */
                    nextPageToken?: (string|null);

                    /** ListFindingsResponse totalSize */
                    totalSize?: (number|null);
                }

                /** Represents a ListFindingsResponse. */
                class ListFindingsResponse implements IListFindingsResponse {

                    /**
                     * Constructs a new ListFindingsResponse.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IListFindingsResponse);

                    /** ListFindingsResponse findings. */
                    public findings: google.cloud.securitycenter.v1beta1.IFinding[];

                    /** ListFindingsResponse readTime. */
                    public readTime?: (google.protobuf.ITimestamp|null);

                    /** ListFindingsResponse nextPageToken. */
                    public nextPageToken: string;

                    /** ListFindingsResponse totalSize. */
                    public totalSize: number;

                    /**
                     * Creates a new ListFindingsResponse instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns ListFindingsResponse instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IListFindingsResponse): google.cloud.securitycenter.v1beta1.ListFindingsResponse;

                    /**
                     * Encodes the specified ListFindingsResponse message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified ListFindingsResponse message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.ListFindingsResponse.verify|verify} messages.
                     * @param message ListFindingsResponse message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IListFindingsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.ListFindingsResponse;

                    /**
                     * Decodes a ListFindingsResponse message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns ListFindingsResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.ListFindingsResponse;

                    /**
                     * Verifies a ListFindingsResponse message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a ListFindingsResponse message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns ListFindingsResponse
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.ListFindingsResponse;

                    /**
                     * Creates a plain object from a ListFindingsResponse message. Also converts values to other types if specified.
                     * @param message ListFindingsResponse
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.ListFindingsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this ListFindingsResponse to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a SetFindingStateRequest. */
                interface ISetFindingStateRequest {

                    /** SetFindingStateRequest name */
                    name?: (string|null);

                    /** SetFindingStateRequest state */
                    state?: (google.cloud.securitycenter.v1beta1.Finding.State|null);

                    /** SetFindingStateRequest startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a SetFindingStateRequest. */
                class SetFindingStateRequest implements ISetFindingStateRequest {

                    /**
                     * Constructs a new SetFindingStateRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.ISetFindingStateRequest);

                    /** SetFindingStateRequest name. */
                    public name: string;

                    /** SetFindingStateRequest state. */
                    public state: google.cloud.securitycenter.v1beta1.Finding.State;

                    /** SetFindingStateRequest startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new SetFindingStateRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SetFindingStateRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.ISetFindingStateRequest): google.cloud.securitycenter.v1beta1.SetFindingStateRequest;

                    /**
                     * Encodes the specified SetFindingStateRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.SetFindingStateRequest.verify|verify} messages.
                     * @param message SetFindingStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.ISetFindingStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SetFindingStateRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.SetFindingStateRequest.verify|verify} messages.
                     * @param message SetFindingStateRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.ISetFindingStateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SetFindingStateRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SetFindingStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.SetFindingStateRequest;

                    /**
                     * Decodes a SetFindingStateRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SetFindingStateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.SetFindingStateRequest;

                    /**
                     * Verifies a SetFindingStateRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SetFindingStateRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SetFindingStateRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.SetFindingStateRequest;

                    /**
                     * Creates a plain object from a SetFindingStateRequest message. Also converts values to other types if specified.
                     * @param message SetFindingStateRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.SetFindingStateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SetFindingStateRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a RunAssetDiscoveryRequest. */
                interface IRunAssetDiscoveryRequest {

                    /** RunAssetDiscoveryRequest parent */
                    parent?: (string|null);
                }

                /** Represents a RunAssetDiscoveryRequest. */
                class RunAssetDiscoveryRequest implements IRunAssetDiscoveryRequest {

                    /**
                     * Constructs a new RunAssetDiscoveryRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IRunAssetDiscoveryRequest);

                    /** RunAssetDiscoveryRequest parent. */
                    public parent: string;

                    /**
                     * Creates a new RunAssetDiscoveryRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns RunAssetDiscoveryRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IRunAssetDiscoveryRequest): google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest;

                    /**
                     * Encodes the specified RunAssetDiscoveryRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest.verify|verify} messages.
                     * @param message RunAssetDiscoveryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IRunAssetDiscoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified RunAssetDiscoveryRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest.verify|verify} messages.
                     * @param message RunAssetDiscoveryRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IRunAssetDiscoveryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a RunAssetDiscoveryRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns RunAssetDiscoveryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest;

                    /**
                     * Decodes a RunAssetDiscoveryRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns RunAssetDiscoveryRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest;

                    /**
                     * Verifies a RunAssetDiscoveryRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a RunAssetDiscoveryRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns RunAssetDiscoveryRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest;

                    /**
                     * Creates a plain object from a RunAssetDiscoveryRequest message. Also converts values to other types if specified.
                     * @param message RunAssetDiscoveryRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.RunAssetDiscoveryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this RunAssetDiscoveryRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateFindingRequest. */
                interface IUpdateFindingRequest {

                    /** UpdateFindingRequest finding */
                    finding?: (google.cloud.securitycenter.v1beta1.IFinding|null);

                    /** UpdateFindingRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateFindingRequest. */
                class UpdateFindingRequest implements IUpdateFindingRequest {

                    /**
                     * Constructs a new UpdateFindingRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IUpdateFindingRequest);

                    /** UpdateFindingRequest finding. */
                    public finding?: (google.cloud.securitycenter.v1beta1.IFinding|null);

                    /** UpdateFindingRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateFindingRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateFindingRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IUpdateFindingRequest): google.cloud.securitycenter.v1beta1.UpdateFindingRequest;

                    /**
                     * Encodes the specified UpdateFindingRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateFindingRequest.verify|verify} messages.
                     * @param message UpdateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IUpdateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateFindingRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateFindingRequest.verify|verify} messages.
                     * @param message UpdateFindingRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IUpdateFindingRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateFindingRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.UpdateFindingRequest;

                    /**
                     * Decodes an UpdateFindingRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateFindingRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.UpdateFindingRequest;

                    /**
                     * Verifies an UpdateFindingRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateFindingRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateFindingRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.UpdateFindingRequest;

                    /**
                     * Creates a plain object from an UpdateFindingRequest message. Also converts values to other types if specified.
                     * @param message UpdateFindingRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.UpdateFindingRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateFindingRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateOrganizationSettingsRequest. */
                interface IUpdateOrganizationSettingsRequest {

                    /** UpdateOrganizationSettingsRequest organizationSettings */
                    organizationSettings?: (google.cloud.securitycenter.v1beta1.IOrganizationSettings|null);

                    /** UpdateOrganizationSettingsRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateOrganizationSettingsRequest. */
                class UpdateOrganizationSettingsRequest implements IUpdateOrganizationSettingsRequest {

                    /**
                     * Constructs a new UpdateOrganizationSettingsRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IUpdateOrganizationSettingsRequest);

                    /** UpdateOrganizationSettingsRequest organizationSettings. */
                    public organizationSettings?: (google.cloud.securitycenter.v1beta1.IOrganizationSettings|null);

                    /** UpdateOrganizationSettingsRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateOrganizationSettingsRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateOrganizationSettingsRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IUpdateOrganizationSettingsRequest): google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest;

                    /**
                     * Encodes the specified UpdateOrganizationSettingsRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest.verify|verify} messages.
                     * @param message UpdateOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IUpdateOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateOrganizationSettingsRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest.verify|verify} messages.
                     * @param message UpdateOrganizationSettingsRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IUpdateOrganizationSettingsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateOrganizationSettingsRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest;

                    /**
                     * Decodes an UpdateOrganizationSettingsRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateOrganizationSettingsRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest;

                    /**
                     * Verifies an UpdateOrganizationSettingsRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateOrganizationSettingsRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateOrganizationSettingsRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest;

                    /**
                     * Creates a plain object from an UpdateOrganizationSettingsRequest message. Also converts values to other types if specified.
                     * @param message UpdateOrganizationSettingsRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.UpdateOrganizationSettingsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateOrganizationSettingsRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSourceRequest. */
                interface IUpdateSourceRequest {

                    /** UpdateSourceRequest source */
                    source?: (google.cloud.securitycenter.v1beta1.ISource|null);

                    /** UpdateSourceRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);
                }

                /** Represents an UpdateSourceRequest. */
                class UpdateSourceRequest implements IUpdateSourceRequest {

                    /**
                     * Constructs a new UpdateSourceRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IUpdateSourceRequest);

                    /** UpdateSourceRequest source. */
                    public source?: (google.cloud.securitycenter.v1beta1.ISource|null);

                    /** UpdateSourceRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /**
                     * Creates a new UpdateSourceRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSourceRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IUpdateSourceRequest): google.cloud.securitycenter.v1beta1.UpdateSourceRequest;

                    /**
                     * Encodes the specified UpdateSourceRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateSourceRequest.verify|verify} messages.
                     * @param message UpdateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IUpdateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSourceRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateSourceRequest.verify|verify} messages.
                     * @param message UpdateSourceRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IUpdateSourceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSourceRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.UpdateSourceRequest;

                    /**
                     * Decodes an UpdateSourceRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSourceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.UpdateSourceRequest;

                    /**
                     * Verifies an UpdateSourceRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSourceRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSourceRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.UpdateSourceRequest;

                    /**
                     * Creates a plain object from an UpdateSourceRequest message. Also converts values to other types if specified.
                     * @param message UpdateSourceRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.UpdateSourceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSourceRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an UpdateSecurityMarksRequest. */
                interface IUpdateSecurityMarksRequest {

                    /** UpdateSecurityMarksRequest securityMarks */
                    securityMarks?: (google.cloud.securitycenter.v1beta1.ISecurityMarks|null);

                    /** UpdateSecurityMarksRequest updateMask */
                    updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityMarksRequest startTime */
                    startTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an UpdateSecurityMarksRequest. */
                class UpdateSecurityMarksRequest implements IUpdateSecurityMarksRequest {

                    /**
                     * Constructs a new UpdateSecurityMarksRequest.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IUpdateSecurityMarksRequest);

                    /** UpdateSecurityMarksRequest securityMarks. */
                    public securityMarks?: (google.cloud.securitycenter.v1beta1.ISecurityMarks|null);

                    /** UpdateSecurityMarksRequest updateMask. */
                    public updateMask?: (google.protobuf.IFieldMask|null);

                    /** UpdateSecurityMarksRequest startTime. */
                    public startTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new UpdateSecurityMarksRequest instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns UpdateSecurityMarksRequest instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IUpdateSecurityMarksRequest): google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest;

                    /**
                     * Encodes the specified UpdateSecurityMarksRequest message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest.verify|verify} messages.
                     * @param message UpdateSecurityMarksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IUpdateSecurityMarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified UpdateSecurityMarksRequest message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest.verify|verify} messages.
                     * @param message UpdateSecurityMarksRequest message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IUpdateSecurityMarksRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an UpdateSecurityMarksRequest message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns UpdateSecurityMarksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest;

                    /**
                     * Decodes an UpdateSecurityMarksRequest message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns UpdateSecurityMarksRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest;

                    /**
                     * Verifies an UpdateSecurityMarksRequest message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an UpdateSecurityMarksRequest message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns UpdateSecurityMarksRequest
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest;

                    /**
                     * Creates a plain object from an UpdateSecurityMarksRequest message. Also converts values to other types if specified.
                     * @param message UpdateSecurityMarksRequest
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.UpdateSecurityMarksRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this UpdateSecurityMarksRequest to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of an Asset. */
                interface IAsset {

                    /** Asset name */
                    name?: (string|null);

                    /** Asset securityCenterProperties */
                    securityCenterProperties?: (google.cloud.securitycenter.v1beta1.Asset.ISecurityCenterProperties|null);

                    /** Asset resourceProperties */
                    resourceProperties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** Asset securityMarks */
                    securityMarks?: (google.cloud.securitycenter.v1beta1.ISecurityMarks|null);

                    /** Asset createTime */
                    createTime?: (google.protobuf.ITimestamp|null);

                    /** Asset updateTime */
                    updateTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents an Asset. */
                class Asset implements IAsset {

                    /**
                     * Constructs a new Asset.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IAsset);

                    /** Asset name. */
                    public name: string;

                    /** Asset securityCenterProperties. */
                    public securityCenterProperties?: (google.cloud.securitycenter.v1beta1.Asset.ISecurityCenterProperties|null);

                    /** Asset resourceProperties. */
                    public resourceProperties: { [k: string]: google.protobuf.IValue };

                    /** Asset securityMarks. */
                    public securityMarks?: (google.cloud.securitycenter.v1beta1.ISecurityMarks|null);

                    /** Asset createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /** Asset updateTime. */
                    public updateTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Asset instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Asset instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IAsset): google.cloud.securitycenter.v1beta1.Asset;

                    /**
                     * Encodes the specified Asset message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Asset message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Asset.verify|verify} messages.
                     * @param message Asset message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IAsset, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an Asset message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.Asset;

                    /**
                     * Decodes an Asset message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Asset
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.Asset;

                    /**
                     * Verifies an Asset message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an Asset message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Asset
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.Asset;

                    /**
                     * Creates a plain object from an Asset message. Also converts values to other types if specified.
                     * @param message Asset
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.Asset, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Asset to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Asset {

                    /** Properties of a SecurityCenterProperties. */
                    interface ISecurityCenterProperties {

                        /** SecurityCenterProperties resourceName */
                        resourceName?: (string|null);

                        /** SecurityCenterProperties resourceType */
                        resourceType?: (string|null);

                        /** SecurityCenterProperties resourceParent */
                        resourceParent?: (string|null);

                        /** SecurityCenterProperties resourceProject */
                        resourceProject?: (string|null);

                        /** SecurityCenterProperties resourceOwners */
                        resourceOwners?: (string[]|null);
                    }

                    /** Represents a SecurityCenterProperties. */
                    class SecurityCenterProperties implements ISecurityCenterProperties {

                        /**
                         * Constructs a new SecurityCenterProperties.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1beta1.Asset.ISecurityCenterProperties);

                        /** SecurityCenterProperties resourceName. */
                        public resourceName: string;

                        /** SecurityCenterProperties resourceType. */
                        public resourceType: string;

                        /** SecurityCenterProperties resourceParent. */
                        public resourceParent: string;

                        /** SecurityCenterProperties resourceProject. */
                        public resourceProject: string;

                        /** SecurityCenterProperties resourceOwners. */
                        public resourceOwners: string[];

                        /**
                         * Creates a new SecurityCenterProperties instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns SecurityCenterProperties instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1beta1.Asset.ISecurityCenterProperties): google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties;

                        /**
                         * Encodes the specified SecurityCenterProperties message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties.verify|verify} messages.
                         * @param message SecurityCenterProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1beta1.Asset.ISecurityCenterProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified SecurityCenterProperties message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties.verify|verify} messages.
                         * @param message SecurityCenterProperties message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.Asset.ISecurityCenterProperties, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes a SecurityCenterProperties message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns SecurityCenterProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties;

                        /**
                         * Decodes a SecurityCenterProperties message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns SecurityCenterProperties
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties;

                        /**
                         * Verifies a SecurityCenterProperties message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates a SecurityCenterProperties message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns SecurityCenterProperties
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties;

                        /**
                         * Creates a plain object from a SecurityCenterProperties message. Also converts values to other types if specified.
                         * @param message SecurityCenterProperties
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1beta1.Asset.SecurityCenterProperties, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this SecurityCenterProperties to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }
                }

                /** Properties of a SecurityMarks. */
                interface ISecurityMarks {

                    /** SecurityMarks name */
                    name?: (string|null);

                    /** SecurityMarks marks */
                    marks?: ({ [k: string]: string }|null);
                }

                /** Represents a SecurityMarks. */
                class SecurityMarks implements ISecurityMarks {

                    /**
                     * Constructs a new SecurityMarks.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.ISecurityMarks);

                    /** SecurityMarks name. */
                    public name: string;

                    /** SecurityMarks marks. */
                    public marks: { [k: string]: string };

                    /**
                     * Creates a new SecurityMarks instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns SecurityMarks instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.ISecurityMarks): google.cloud.securitycenter.v1beta1.SecurityMarks;

                    /**
                     * Encodes the specified SecurityMarks message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.SecurityMarks.verify|verify} messages.
                     * @param message SecurityMarks message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.ISecurityMarks, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified SecurityMarks message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.SecurityMarks.verify|verify} messages.
                     * @param message SecurityMarks message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.ISecurityMarks, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a SecurityMarks message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns SecurityMarks
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.SecurityMarks;

                    /**
                     * Decodes a SecurityMarks message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns SecurityMarks
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.SecurityMarks;

                    /**
                     * Verifies a SecurityMarks message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a SecurityMarks message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns SecurityMarks
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.SecurityMarks;

                    /**
                     * Creates a plain object from a SecurityMarks message. Also converts values to other types if specified.
                     * @param message SecurityMarks
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.SecurityMarks, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this SecurityMarks to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Finding. */
                interface IFinding {

                    /** Finding name */
                    name?: (string|null);

                    /** Finding parent */
                    parent?: (string|null);

                    /** Finding resourceName */
                    resourceName?: (string|null);

                    /** Finding state */
                    state?: (google.cloud.securitycenter.v1beta1.Finding.State|null);

                    /** Finding category */
                    category?: (string|null);

                    /** Finding externalUri */
                    externalUri?: (string|null);

                    /** Finding sourceProperties */
                    sourceProperties?: ({ [k: string]: google.protobuf.IValue }|null);

                    /** Finding securityMarks */
                    securityMarks?: (google.cloud.securitycenter.v1beta1.ISecurityMarks|null);

                    /** Finding eventTime */
                    eventTime?: (google.protobuf.ITimestamp|null);

                    /** Finding createTime */
                    createTime?: (google.protobuf.ITimestamp|null);
                }

                /** Represents a Finding. */
                class Finding implements IFinding {

                    /**
                     * Constructs a new Finding.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IFinding);

                    /** Finding name. */
                    public name: string;

                    /** Finding parent. */
                    public parent: string;

                    /** Finding resourceName. */
                    public resourceName: string;

                    /** Finding state. */
                    public state: google.cloud.securitycenter.v1beta1.Finding.State;

                    /** Finding category. */
                    public category: string;

                    /** Finding externalUri. */
                    public externalUri: string;

                    /** Finding sourceProperties. */
                    public sourceProperties: { [k: string]: google.protobuf.IValue };

                    /** Finding securityMarks. */
                    public securityMarks?: (google.cloud.securitycenter.v1beta1.ISecurityMarks|null);

                    /** Finding eventTime. */
                    public eventTime?: (google.protobuf.ITimestamp|null);

                    /** Finding createTime. */
                    public createTime?: (google.protobuf.ITimestamp|null);

                    /**
                     * Creates a new Finding instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Finding instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IFinding): google.cloud.securitycenter.v1beta1.Finding;

                    /**
                     * Encodes the specified Finding message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Finding message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Finding.verify|verify} messages.
                     * @param message Finding message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IFinding, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Finding message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.Finding;

                    /**
                     * Decodes a Finding message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Finding
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.Finding;

                    /**
                     * Verifies a Finding message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Finding message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Finding
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.Finding;

                    /**
                     * Creates a plain object from a Finding message. Also converts values to other types if specified.
                     * @param message Finding
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.Finding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Finding to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace Finding {

                    /** State enum. */
                    enum State {
                        STATE_UNSPECIFIED = 0,
                        ACTIVE = 1,
                        INACTIVE = 2
                    }
                }

                /** Properties of an OrganizationSettings. */
                interface IOrganizationSettings {

                    /** OrganizationSettings name */
                    name?: (string|null);

                    /** OrganizationSettings enableAssetDiscovery */
                    enableAssetDiscovery?: (boolean|null);

                    /** OrganizationSettings assetDiscoveryConfig */
                    assetDiscoveryConfig?: (google.cloud.securitycenter.v1beta1.OrganizationSettings.IAssetDiscoveryConfig|null);
                }

                /** Represents an OrganizationSettings. */
                class OrganizationSettings implements IOrganizationSettings {

                    /**
                     * Constructs a new OrganizationSettings.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.IOrganizationSettings);

                    /** OrganizationSettings name. */
                    public name: string;

                    /** OrganizationSettings enableAssetDiscovery. */
                    public enableAssetDiscovery: boolean;

                    /** OrganizationSettings assetDiscoveryConfig. */
                    public assetDiscoveryConfig?: (google.cloud.securitycenter.v1beta1.OrganizationSettings.IAssetDiscoveryConfig|null);

                    /**
                     * Creates a new OrganizationSettings instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns OrganizationSettings instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.IOrganizationSettings): google.cloud.securitycenter.v1beta1.OrganizationSettings;

                    /**
                     * Encodes the specified OrganizationSettings message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.OrganizationSettings.verify|verify} messages.
                     * @param message OrganizationSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.IOrganizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified OrganizationSettings message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.OrganizationSettings.verify|verify} messages.
                     * @param message OrganizationSettings message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.IOrganizationSettings, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes an OrganizationSettings message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns OrganizationSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.OrganizationSettings;

                    /**
                     * Decodes an OrganizationSettings message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns OrganizationSettings
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.OrganizationSettings;

                    /**
                     * Verifies an OrganizationSettings message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates an OrganizationSettings message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns OrganizationSettings
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.OrganizationSettings;

                    /**
                     * Creates a plain object from an OrganizationSettings message. Also converts values to other types if specified.
                     * @param message OrganizationSettings
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.OrganizationSettings, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this OrganizationSettings to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                namespace OrganizationSettings {

                    /** Properties of an AssetDiscoveryConfig. */
                    interface IAssetDiscoveryConfig {

                        /** AssetDiscoveryConfig projectIds */
                        projectIds?: (string[]|null);

                        /** AssetDiscoveryConfig inclusionMode */
                        inclusionMode?: (google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode|null);
                    }

                    /** Represents an AssetDiscoveryConfig. */
                    class AssetDiscoveryConfig implements IAssetDiscoveryConfig {

                        /**
                         * Constructs a new AssetDiscoveryConfig.
                         * @param [properties] Properties to set
                         */
                        constructor(properties?: google.cloud.securitycenter.v1beta1.OrganizationSettings.IAssetDiscoveryConfig);

                        /** AssetDiscoveryConfig projectIds. */
                        public projectIds: string[];

                        /** AssetDiscoveryConfig inclusionMode. */
                        public inclusionMode: google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.InclusionMode;

                        /**
                         * Creates a new AssetDiscoveryConfig instance using the specified properties.
                         * @param [properties] Properties to set
                         * @returns AssetDiscoveryConfig instance
                         */
                        public static create(properties?: google.cloud.securitycenter.v1beta1.OrganizationSettings.IAssetDiscoveryConfig): google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Encodes the specified AssetDiscoveryConfig message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.verify|verify} messages.
                         * @param message AssetDiscoveryConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encode(message: google.cloud.securitycenter.v1beta1.OrganizationSettings.IAssetDiscoveryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Encodes the specified AssetDiscoveryConfig message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig.verify|verify} messages.
                         * @param message AssetDiscoveryConfig message or plain object to encode
                         * @param [writer] Writer to encode to
                         * @returns Writer
                         */
                        public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.OrganizationSettings.IAssetDiscoveryConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                        /**
                         * Decodes an AssetDiscoveryConfig message from the specified reader or buffer.
                         * @param reader Reader or buffer to decode from
                         * @param [length] Message length if known beforehand
                         * @returns AssetDiscoveryConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Decodes an AssetDiscoveryConfig message from the specified reader or buffer, length delimited.
                         * @param reader Reader or buffer to decode from
                         * @returns AssetDiscoveryConfig
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Verifies an AssetDiscoveryConfig message.
                         * @param message Plain object to verify
                         * @returns `null` if valid, otherwise the reason why it is not
                         */
                        public static verify(message: { [k: string]: any }): (string|null);

                        /**
                         * Creates an AssetDiscoveryConfig message from a plain object. Also converts values to their respective internal types.
                         * @param object Plain object
                         * @returns AssetDiscoveryConfig
                         */
                        public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig;

                        /**
                         * Creates a plain object from an AssetDiscoveryConfig message. Also converts values to other types if specified.
                         * @param message AssetDiscoveryConfig
                         * @param [options] Conversion options
                         * @returns Plain object
                         */
                        public static toObject(message: google.cloud.securitycenter.v1beta1.OrganizationSettings.AssetDiscoveryConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                        /**
                         * Converts this AssetDiscoveryConfig to JSON.
                         * @returns JSON object
                         */
                        public toJSON(): { [k: string]: any };
                    }

                    namespace AssetDiscoveryConfig {

                        /** InclusionMode enum. */
                        enum InclusionMode {
                            INCLUSION_MODE_UNSPECIFIED = 0,
                            INCLUDE_ONLY = 1,
                            EXCLUDE = 2
                        }
                    }
                }

                /** Properties of a Source. */
                interface ISource {

                    /** Source name */
                    name?: (string|null);

                    /** Source displayName */
                    displayName?: (string|null);

                    /** Source description */
                    description?: (string|null);
                }

                /** Represents a Source. */
                class Source implements ISource {

                    /**
                     * Constructs a new Source.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: google.cloud.securitycenter.v1beta1.ISource);

                    /** Source name. */
                    public name: string;

                    /** Source displayName. */
                    public displayName: string;

                    /** Source description. */
                    public description: string;

                    /**
                     * Creates a new Source instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Source instance
                     */
                    public static create(properties?: google.cloud.securitycenter.v1beta1.ISource): google.cloud.securitycenter.v1beta1.Source;

                    /**
                     * Encodes the specified Source message. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: google.cloud.securitycenter.v1beta1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Source message, length delimited. Does not implicitly {@link google.cloud.securitycenter.v1beta1.Source.verify|verify} messages.
                     * @param message Source message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: google.cloud.securitycenter.v1beta1.ISource, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Source message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.cloud.securitycenter.v1beta1.Source;

                    /**
                     * Decodes a Source message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Source
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.cloud.securitycenter.v1beta1.Source;

                    /**
                     * Verifies a Source message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Source message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Source
                     */
                    public static fromObject(object: { [k: string]: any }): google.cloud.securitycenter.v1beta1.Source;

                    /**
                     * Creates a plain object from a Source message. Also converts values to other types if specified.
                     * @param message Source
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: google.cloud.securitycenter.v1beta1.Source, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Source to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);

            /** Http fullyDecodeReservedExpansion */
            fullyDecodeReservedExpansion?: (boolean|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /** Http fullyDecodeReservedExpansion. */
            public fullyDecodeReservedExpansion: boolean;

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule responseBody */
            responseBody?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule body. */
            public body: string;

            /** HttpRule responseBody. */
            public responseBody: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** FieldBehavior enum. */
        enum FieldBehavior {
            FIELD_BEHAVIOR_UNSPECIFIED = 0,
            OPTIONAL = 1,
            REQUIRED = 2,
            OUTPUT_ONLY = 3,
            INPUT_ONLY = 4,
            IMMUTABLE = 5
        }

        /** Properties of a ResourceDescriptor. */
        interface IResourceDescriptor {

            /** ResourceDescriptor type */
            type?: (string|null);

            /** ResourceDescriptor pattern */
            pattern?: (string[]|null);

            /** ResourceDescriptor nameField */
            nameField?: (string|null);

            /** ResourceDescriptor history */
            history?: (google.api.ResourceDescriptor.History|null);

            /** ResourceDescriptor plural */
            plural?: (string|null);

            /** ResourceDescriptor singular */
            singular?: (string|null);
        }

        /** Represents a ResourceDescriptor. */
        class ResourceDescriptor implements IResourceDescriptor {

            /**
             * Constructs a new ResourceDescriptor.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceDescriptor);

            /** ResourceDescriptor type. */
            public type: string;

            /** ResourceDescriptor pattern. */
            public pattern: string[];

            /** ResourceDescriptor nameField. */
            public nameField: string;

            /** ResourceDescriptor history. */
            public history: google.api.ResourceDescriptor.History;

            /** ResourceDescriptor plural. */
            public plural: string;

            /** ResourceDescriptor singular. */
            public singular: string;

            /**
             * Creates a new ResourceDescriptor instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceDescriptor instance
             */
            public static create(properties?: google.api.IResourceDescriptor): google.api.ResourceDescriptor;

            /**
             * Encodes the specified ResourceDescriptor message. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceDescriptor message, length delimited. Does not implicitly {@link google.api.ResourceDescriptor.verify|verify} messages.
             * @param message ResourceDescriptor message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceDescriptor, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceDescriptor;

            /**
             * Decodes a ResourceDescriptor message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceDescriptor
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceDescriptor;

            /**
             * Verifies a ResourceDescriptor message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceDescriptor message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceDescriptor
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceDescriptor;

            /**
             * Creates a plain object from a ResourceDescriptor message. Also converts values to other types if specified.
             * @param message ResourceDescriptor
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceDescriptor, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceDescriptor to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace ResourceDescriptor {

            /** History enum. */
            enum History {
                HISTORY_UNSPECIFIED = 0,
                ORIGINALLY_SINGLE_PATTERN = 1,
                FUTURE_MULTI_PATTERN = 2
            }
        }

        /** Properties of a ResourceReference. */
        interface IResourceReference {

            /** ResourceReference type */
            type?: (string|null);

            /** ResourceReference childType */
            childType?: (string|null);
        }

        /** Represents a ResourceReference. */
        class ResourceReference implements IResourceReference {

            /**
             * Constructs a new ResourceReference.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IResourceReference);

            /** ResourceReference type. */
            public type: string;

            /** ResourceReference childType. */
            public childType: string;

            /**
             * Creates a new ResourceReference instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ResourceReference instance
             */
            public static create(properties?: google.api.IResourceReference): google.api.ResourceReference;

            /**
             * Encodes the specified ResourceReference message. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ResourceReference message, length delimited. Does not implicitly {@link google.api.ResourceReference.verify|verify} messages.
             * @param message ResourceReference message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IResourceReference, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.ResourceReference;

            /**
             * Decodes a ResourceReference message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ResourceReference
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.ResourceReference;

            /**
             * Verifies a ResourceReference message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ResourceReference message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ResourceReference
             */
            public static fromObject(object: { [k: string]: any }): google.api.ResourceReference;

            /**
             * Creates a plain object from a ResourceReference message. Also converts values to other types if specified.
             * @param message ResourceReference
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.ResourceReference, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ResourceReference to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);

                /** ExtensionRange options */
                options?: (google.protobuf.IExtensionRangeOptions|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /** ExtensionRange options. */
                public options?: (google.protobuf.IExtensionRangeOptions|null);

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an ExtensionRangeOptions. */
        interface IExtensionRangeOptions {

            /** ExtensionRangeOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an ExtensionRangeOptions. */
        class ExtensionRangeOptions implements IExtensionRangeOptions {

            /**
             * Constructs a new ExtensionRangeOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IExtensionRangeOptions);

            /** ExtensionRangeOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ExtensionRangeOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ExtensionRangeOptions instance
             */
            public static create(properties?: google.protobuf.IExtensionRangeOptions): google.protobuf.ExtensionRangeOptions;

            /**
             * Encodes the specified ExtensionRangeOptions message. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ExtensionRangeOptions message, length delimited. Does not implicitly {@link google.protobuf.ExtensionRangeOptions.verify|verify} messages.
             * @param message ExtensionRangeOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IExtensionRangeOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ExtensionRangeOptions;

            /**
             * Decodes an ExtensionRangeOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ExtensionRangeOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ExtensionRangeOptions;

            /**
             * Verifies an ExtensionRangeOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an ExtensionRangeOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ExtensionRangeOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ExtensionRangeOptions;

            /**
             * Creates a plain object from an ExtensionRangeOptions message. Also converts values to other types if specified.
             * @param message ExtensionRangeOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ExtensionRangeOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ExtensionRangeOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange */
            reservedRange?: (google.protobuf.EnumDescriptorProto.IEnumReservedRange[]|null);

            /** EnumDescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /** EnumDescriptorProto reservedRange. */
            public reservedRange: google.protobuf.EnumDescriptorProto.IEnumReservedRange[];

            /** EnumDescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace EnumDescriptorProto {

            /** Properties of an EnumReservedRange. */
            interface IEnumReservedRange {

                /** EnumReservedRange start */
                start?: (number|null);

                /** EnumReservedRange end */
                end?: (number|null);
            }

            /** Represents an EnumReservedRange. */
            class EnumReservedRange implements IEnumReservedRange {

                /**
                 * Constructs a new EnumReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange);

                /** EnumReservedRange start. */
                public start: number;

                /** EnumReservedRange end. */
                public end: number;

                /**
                 * Creates a new EnumReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EnumReservedRange instance
                 */
                public static create(properties?: google.protobuf.EnumDescriptorProto.IEnumReservedRange): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Encodes the specified EnumReservedRange message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EnumReservedRange message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.EnumReservedRange.verify|verify} messages.
                 * @param message EnumReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.EnumDescriptorProto.IEnumReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Decodes an EnumReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EnumReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Verifies an EnumReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EnumReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EnumReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto.EnumReservedRange;

                /**
                 * Creates a plain object from an EnumReservedRange message. Also converts values to other types if specified.
                 * @param message EnumReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.EnumDescriptorProto.EnumReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EnumReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions phpGenericServices */
            phpGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions swiftPrefix */
            swiftPrefix?: (string|null);

            /** FileOptions phpClassPrefix */
            phpClassPrefix?: (string|null);

            /** FileOptions phpNamespace */
            phpNamespace?: (string|null);

            /** FileOptions phpMetadataNamespace */
            phpMetadataNamespace?: (string|null);

            /** FileOptions rubyPackage */
            rubyPackage?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FileOptions .google.api.resourceDefinition */
            ".google.api.resourceDefinition"?: (google.api.IResourceDescriptor[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions phpGenericServices. */
            public phpGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions swiftPrefix. */
            public swiftPrefix: string;

            /** FileOptions phpClassPrefix. */
            public phpClassPrefix: string;

            /** FileOptions phpNamespace. */
            public phpNamespace: string;

            /** FileOptions phpMetadataNamespace. */
            public phpMetadataNamespace: string;

            /** FileOptions rubyPackage. */
            public rubyPackage: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MessageOptions .google.api.resource */
            ".google.api.resource"?: (google.api.IResourceDescriptor|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** FieldOptions .google.api.fieldBehavior */
            ".google.api.fieldBehavior"?: (google.api.FieldBehavior[]|null);

            /** FieldOptions .google.api.resourceReference */
            ".google.api.resourceReference"?: (google.api.IResourceReference|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** ServiceOptions .google.api.defaultHost */
            ".google.api.defaultHost"?: (string|null);

            /** ServiceOptions .google.api.oauthScopes */
            ".google.api.oauthScopes"?: (string|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions idempotencyLevel */
            idempotencyLevel?: (google.protobuf.MethodOptions.IdempotencyLevel|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);

            /** MethodOptions .google.api.methodSignature */
            ".google.api.methodSignature"?: (string[]|null);

            /** MethodOptions .google.longrunning.operationInfo */
            ".google.longrunning.operationInfo"?: (google.longrunning.IOperationInfo|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions idempotencyLevel. */
            public idempotencyLevel: google.protobuf.MethodOptions.IdempotencyLevel;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace MethodOptions {

            /** IdempotencyLevel enum. */
            enum IdempotencyLevel {
                IDEMPOTENCY_UNKNOWN = 0,
                NO_SIDE_EFFECTS = 1,
                IDEMPOTENT = 2
            }
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a Struct. */
        interface IStruct {

            /** Struct fields */
            fields?: ({ [k: string]: google.protobuf.IValue }|null);
        }

        /** Represents a Struct. */
        class Struct implements IStruct {

            /**
             * Constructs a new Struct.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStruct);

            /** Struct fields. */
            public fields: { [k: string]: google.protobuf.IValue };

            /**
             * Creates a new Struct instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Struct instance
             */
            public static create(properties?: google.protobuf.IStruct): google.protobuf.Struct;

            /**
             * Encodes the specified Struct message. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Struct message, length delimited. Does not implicitly {@link google.protobuf.Struct.verify|verify} messages.
             * @param message Struct message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStruct, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Struct message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Struct;

            /**
             * Decodes a Struct message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Struct
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Struct;

            /**
             * Verifies a Struct message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Struct message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Struct
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Struct;

            /**
             * Creates a plain object from a Struct message. Also converts values to other types if specified.
             * @param message Struct
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Struct, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Struct to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Value. */
        interface IValue {

            /** Value nullValue */
            nullValue?: (google.protobuf.NullValue|null);

            /** Value numberValue */
            numberValue?: (number|null);

            /** Value stringValue */
            stringValue?: (string|null);

            /** Value boolValue */
            boolValue?: (boolean|null);

            /** Value structValue */
            structValue?: (google.protobuf.IStruct|null);

            /** Value listValue */
            listValue?: (google.protobuf.IListValue|null);
        }

        /** Represents a Value. */
        class Value implements IValue {

            /**
             * Constructs a new Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IValue);

            /** Value nullValue. */
            public nullValue: google.protobuf.NullValue;

            /** Value numberValue. */
            public numberValue: number;

            /** Value stringValue. */
            public stringValue: string;

            /** Value boolValue. */
            public boolValue: boolean;

            /** Value structValue. */
            public structValue?: (google.protobuf.IStruct|null);

            /** Value listValue. */
            public listValue?: (google.protobuf.IListValue|null);

            /** Value kind. */
            public kind?: ("nullValue"|"numberValue"|"stringValue"|"boolValue"|"structValue"|"listValue");

            /**
             * Creates a new Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Value instance
             */
            public static create(properties?: google.protobuf.IValue): google.protobuf.Value;

            /**
             * Encodes the specified Value message. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Value message, length delimited. Does not implicitly {@link google.protobuf.Value.verify|verify} messages.
             * @param message Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Value;

            /**
             * Decodes a Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Value;

            /**
             * Verifies a Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Value;

            /**
             * Creates a plain object from a Value message. Also converts values to other types if specified.
             * @param message Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NullValue enum. */
        enum NullValue {
            NULL_VALUE = 0
        }

        /** Properties of a ListValue. */
        interface IListValue {

            /** ListValue values */
            values?: (google.protobuf.IValue[]|null);
        }

        /** Represents a ListValue. */
        class ListValue implements IListValue {

            /**
             * Constructs a new ListValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IListValue);

            /** ListValue values. */
            public values: google.protobuf.IValue[];

            /**
             * Creates a new ListValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListValue instance
             */
            public static create(properties?: google.protobuf.IListValue): google.protobuf.ListValue;

            /**
             * Encodes the specified ListValue message. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListValue message, length delimited. Does not implicitly {@link google.protobuf.ListValue.verify|verify} messages.
             * @param message ListValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IListValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ListValue;

            /**
             * Decodes a ListValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ListValue;

            /**
             * Verifies a ListValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ListValue;

            /**
             * Creates a plain object from a ListValue message. Also converts values to other types if specified.
             * @param message ListValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ListValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Timestamp. */
        interface ITimestamp {

            /** Timestamp seconds */
            seconds?: (number|Long|null);

            /** Timestamp nanos */
            nanos?: (number|null);
        }

        /** Represents a Timestamp. */
        class Timestamp implements ITimestamp {

            /**
             * Constructs a new Timestamp.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ITimestamp);

            /** Timestamp seconds. */
            public seconds: (number|Long);

            /** Timestamp nanos. */
            public nanos: number;

            /**
             * Creates a new Timestamp instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Timestamp instance
             */
            public static create(properties?: google.protobuf.ITimestamp): google.protobuf.Timestamp;

            /**
             * Encodes the specified Timestamp message. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Timestamp message, length delimited. Does not implicitly {@link google.protobuf.Timestamp.verify|verify} messages.
             * @param message Timestamp message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ITimestamp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Timestamp message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Timestamp;

            /**
             * Decodes a Timestamp message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Timestamp
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Timestamp;

            /**
             * Verifies a Timestamp message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Timestamp message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Timestamp
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Timestamp;

            /**
             * Creates a plain object from a Timestamp message. Also converts values to other types if specified.
             * @param message Timestamp
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Timestamp, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Timestamp to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a Duration. */
        interface IDuration {

            /** Duration seconds */
            seconds?: (number|Long|null);

            /** Duration nanos */
            nanos?: (number|null);
        }

        /** Represents a Duration. */
        class Duration implements IDuration {

            /**
             * Constructs a new Duration.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDuration);

            /** Duration seconds. */
            public seconds: (number|Long);

            /** Duration nanos. */
            public nanos: number;

            /**
             * Creates a new Duration instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Duration instance
             */
            public static create(properties?: google.protobuf.IDuration): google.protobuf.Duration;

            /**
             * Encodes the specified Duration message. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Duration message, length delimited. Does not implicitly {@link google.protobuf.Duration.verify|verify} messages.
             * @param message Duration message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDuration, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Duration message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Duration;

            /**
             * Decodes a Duration message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Duration
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Duration;

            /**
             * Verifies a Duration message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Duration message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Duration
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Duration;

            /**
             * Creates a plain object from a Duration message. Also converts values to other types if specified.
             * @param message Duration
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Duration, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Duration to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Any. */
        interface IAny {

            /** Any type_url */
            type_url?: (string|null);

            /** Any value */
            value?: (Uint8Array|null);
        }

        /** Represents an Any. */
        class Any implements IAny {

            /**
             * Constructs a new Any.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IAny);

            /** Any type_url. */
            public type_url: string;

            /** Any value. */
            public value: Uint8Array;

            /**
             * Creates a new Any instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Any instance
             */
            public static create(properties?: google.protobuf.IAny): google.protobuf.Any;

            /**
             * Encodes the specified Any message. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Any message, length delimited. Does not implicitly {@link google.protobuf.Any.verify|verify} messages.
             * @param message Any message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IAny, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Any message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Any;

            /**
             * Decodes an Any message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Any
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Any;

            /**
             * Verifies an Any message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Any message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Any
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Any;

            /**
             * Creates a plain object from an Any message. Also converts values to other types if specified.
             * @param message Any
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Any, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Any to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldMask. */
        interface IFieldMask {

            /** FieldMask paths */
            paths?: (string[]|null);
        }

        /** Represents a FieldMask. */
        class FieldMask implements IFieldMask {

            /**
             * Constructs a new FieldMask.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldMask);

            /** FieldMask paths. */
            public paths: string[];

            /**
             * Creates a new FieldMask instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldMask instance
             */
            public static create(properties?: google.protobuf.IFieldMask): google.protobuf.FieldMask;

            /**
             * Encodes the specified FieldMask message. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldMask message, length delimited. Does not implicitly {@link google.protobuf.FieldMask.verify|verify} messages.
             * @param message FieldMask message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldMask, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldMask message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldMask;

            /**
             * Decodes a FieldMask message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldMask
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldMask;

            /**
             * Verifies a FieldMask message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldMask message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldMask
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldMask;

            /**
             * Creates a plain object from a FieldMask message. Also converts values to other types if specified.
             * @param message FieldMask
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldMask, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldMask to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace iam. */
    namespace iam {

        /** Namespace v1. */
        namespace v1 {

            /** Represents a IAMPolicy */
            class IAMPolicy extends $protobuf.rpc.Service {

                /**
                 * Constructs a new IAMPolicy service.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 */
                constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

                /**
                 * Creates new IAMPolicy service using the specified rpc implementation.
                 * @param rpcImpl RPC implementation
                 * @param [requestDelimited=false] Whether requests are length-delimited
                 * @param [responseDelimited=false] Whether responses are length-delimited
                 * @returns RPC service. Useful where requests and/or responses are streamed.
                 */
                public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): IAMPolicy;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.SetIamPolicyCallback): void;

                /**
                 * Calls SetIamPolicy.
                 * @param request SetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public setIamPolicy(request: google.iam.v1.ISetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and Policy
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest, callback: google.iam.v1.IAMPolicy.GetIamPolicyCallback): void;

                /**
                 * Calls GetIamPolicy.
                 * @param request GetIamPolicyRequest message or plain object
                 * @returns Promise
                 */
                public getIamPolicy(request: google.iam.v1.IGetIamPolicyRequest): Promise<google.iam.v1.Policy>;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @param callback Node-style callback called with the error, if any, and TestIamPermissionsResponse
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest, callback: google.iam.v1.IAMPolicy.TestIamPermissionsCallback): void;

                /**
                 * Calls TestIamPermissions.
                 * @param request TestIamPermissionsRequest message or plain object
                 * @returns Promise
                 */
                public testIamPermissions(request: google.iam.v1.ITestIamPermissionsRequest): Promise<google.iam.v1.TestIamPermissionsResponse>;
            }

            namespace IAMPolicy {

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#setIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type SetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#getIamPolicy}.
                 * @param error Error, if any
                 * @param [response] Policy
                 */
                type GetIamPolicyCallback = (error: (Error|null), response?: google.iam.v1.Policy) => void;

                /**
                 * Callback as used by {@link google.iam.v1.IAMPolicy#testIamPermissions}.
                 * @param error Error, if any
                 * @param [response] TestIamPermissionsResponse
                 */
                type TestIamPermissionsCallback = (error: (Error|null), response?: google.iam.v1.TestIamPermissionsResponse) => void;
            }

            /** Properties of a SetIamPolicyRequest. */
            interface ISetIamPolicyRequest {

                /** SetIamPolicyRequest resource */
                resource?: (string|null);

                /** SetIamPolicyRequest policy */
                policy?: (google.iam.v1.IPolicy|null);
            }

            /** Represents a SetIamPolicyRequest. */
            class SetIamPolicyRequest implements ISetIamPolicyRequest {

                /**
                 * Constructs a new SetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ISetIamPolicyRequest);

                /** SetIamPolicyRequest resource. */
                public resource: string;

                /** SetIamPolicyRequest policy. */
                public policy?: (google.iam.v1.IPolicy|null);

                /**
                 * Creates a new SetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.ISetIamPolicyRequest): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Encodes the specified SetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.SetIamPolicyRequest.verify|verify} messages.
                 * @param message SetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ISetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Decodes a SetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Verifies a SetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.SetIamPolicyRequest;

                /**
                 * Creates a plain object from a SetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message SetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.SetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetIamPolicyRequest. */
            interface IGetIamPolicyRequest {

                /** GetIamPolicyRequest resource */
                resource?: (string|null);

                /** GetIamPolicyRequest options */
                options?: (google.iam.v1.IGetPolicyOptions|null);
            }

            /** Represents a GetIamPolicyRequest. */
            class GetIamPolicyRequest implements IGetIamPolicyRequest {

                /**
                 * Constructs a new GetIamPolicyRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetIamPolicyRequest);

                /** GetIamPolicyRequest resource. */
                public resource: string;

                /** GetIamPolicyRequest options. */
                public options?: (google.iam.v1.IGetPolicyOptions|null);

                /**
                 * Creates a new GetIamPolicyRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetIamPolicyRequest instance
                 */
                public static create(properties?: google.iam.v1.IGetIamPolicyRequest): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Encodes the specified GetIamPolicyRequest message. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetIamPolicyRequest message, length delimited. Does not implicitly {@link google.iam.v1.GetIamPolicyRequest.verify|verify} messages.
                 * @param message GetIamPolicyRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetIamPolicyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Decodes a GetIamPolicyRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetIamPolicyRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Verifies a GetIamPolicyRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetIamPolicyRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetIamPolicyRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetIamPolicyRequest;

                /**
                 * Creates a plain object from a GetIamPolicyRequest message. Also converts values to other types if specified.
                 * @param message GetIamPolicyRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetIamPolicyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetIamPolicyRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestIamPermissionsRequest. */
            interface ITestIamPermissionsRequest {

                /** TestIamPermissionsRequest resource */
                resource?: (string|null);

                /** TestIamPermissionsRequest permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsRequest. */
            class TestIamPermissionsRequest implements ITestIamPermissionsRequest {

                /**
                 * Constructs a new TestIamPermissionsRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsRequest);

                /** TestIamPermissionsRequest resource. */
                public resource: string;

                /** TestIamPermissionsRequest permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsRequest instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsRequest): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Encodes the specified TestIamPermissionsRequest message. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsRequest message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsRequest.verify|verify} messages.
                 * @param message TestIamPermissionsRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Decodes a TestIamPermissionsRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Verifies a TestIamPermissionsRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsRequest
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsRequest;

                /**
                 * Creates a plain object from a TestIamPermissionsRequest message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a TestIamPermissionsResponse. */
            interface ITestIamPermissionsResponse {

                /** TestIamPermissionsResponse permissions */
                permissions?: (string[]|null);
            }

            /** Represents a TestIamPermissionsResponse. */
            class TestIamPermissionsResponse implements ITestIamPermissionsResponse {

                /**
                 * Constructs a new TestIamPermissionsResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.ITestIamPermissionsResponse);

                /** TestIamPermissionsResponse permissions. */
                public permissions: string[];

                /**
                 * Creates a new TestIamPermissionsResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns TestIamPermissionsResponse instance
                 */
                public static create(properties?: google.iam.v1.ITestIamPermissionsResponse): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Encodes the specified TestIamPermissionsResponse message. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified TestIamPermissionsResponse message, length delimited. Does not implicitly {@link google.iam.v1.TestIamPermissionsResponse.verify|verify} messages.
                 * @param message TestIamPermissionsResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.ITestIamPermissionsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Decodes a TestIamPermissionsResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns TestIamPermissionsResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Verifies a TestIamPermissionsResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a TestIamPermissionsResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns TestIamPermissionsResponse
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.TestIamPermissionsResponse;

                /**
                 * Creates a plain object from a TestIamPermissionsResponse message. Also converts values to other types if specified.
                 * @param message TestIamPermissionsResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.TestIamPermissionsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this TestIamPermissionsResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GetPolicyOptions. */
            interface IGetPolicyOptions {

                /** GetPolicyOptions requestedPolicyVersion */
                requestedPolicyVersion?: (number|null);
            }

            /** Represents a GetPolicyOptions. */
            class GetPolicyOptions implements IGetPolicyOptions {

                /**
                 * Constructs a new GetPolicyOptions.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IGetPolicyOptions);

                /** GetPolicyOptions requestedPolicyVersion. */
                public requestedPolicyVersion: number;

                /**
                 * Creates a new GetPolicyOptions instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GetPolicyOptions instance
                 */
                public static create(properties?: google.iam.v1.IGetPolicyOptions): google.iam.v1.GetPolicyOptions;

                /**
                 * Encodes the specified GetPolicyOptions message. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GetPolicyOptions message, length delimited. Does not implicitly {@link google.iam.v1.GetPolicyOptions.verify|verify} messages.
                 * @param message GetPolicyOptions message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IGetPolicyOptions, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.GetPolicyOptions;

                /**
                 * Decodes a GetPolicyOptions message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GetPolicyOptions
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.GetPolicyOptions;

                /**
                 * Verifies a GetPolicyOptions message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GetPolicyOptions message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GetPolicyOptions
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.GetPolicyOptions;

                /**
                 * Creates a plain object from a GetPolicyOptions message. Also converts values to other types if specified.
                 * @param message GetPolicyOptions
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.GetPolicyOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GetPolicyOptions to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Policy. */
            interface IPolicy {

                /** Policy version */
                version?: (number|null);

                /** Policy bindings */
                bindings?: (google.iam.v1.IBinding[]|null);

                /** Policy etag */
                etag?: (Uint8Array|null);
            }

            /** Represents a Policy. */
            class Policy implements IPolicy {

                /**
                 * Constructs a new Policy.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicy);

                /** Policy version. */
                public version: number;

                /** Policy bindings. */
                public bindings: google.iam.v1.IBinding[];

                /** Policy etag. */
                public etag: Uint8Array;

                /**
                 * Creates a new Policy instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Policy instance
                 */
                public static create(properties?: google.iam.v1.IPolicy): google.iam.v1.Policy;

                /**
                 * Encodes the specified Policy message. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Policy message, length delimited. Does not implicitly {@link google.iam.v1.Policy.verify|verify} messages.
                 * @param message Policy message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Policy message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Policy;

                /**
                 * Decodes a Policy message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Policy
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Policy;

                /**
                 * Verifies a Policy message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Policy message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Policy
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Policy;

                /**
                 * Creates a plain object from a Policy message. Also converts values to other types if specified.
                 * @param message Policy
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Policy, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Policy to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a Binding. */
            interface IBinding {

                /** Binding role */
                role?: (string|null);

                /** Binding members */
                members?: (string[]|null);

                /** Binding condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a Binding. */
            class Binding implements IBinding {

                /**
                 * Constructs a new Binding.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBinding);

                /** Binding role. */
                public role: string;

                /** Binding members. */
                public members: string[];

                /** Binding condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new Binding instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Binding instance
                 */
                public static create(properties?: google.iam.v1.IBinding): google.iam.v1.Binding;

                /**
                 * Encodes the specified Binding message. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Binding message, length delimited. Does not implicitly {@link google.iam.v1.Binding.verify|verify} messages.
                 * @param message Binding message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBinding, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Binding message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.Binding;

                /**
                 * Decodes a Binding message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Binding
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.Binding;

                /**
                 * Verifies a Binding message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Binding message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Binding
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.Binding;

                /**
                 * Creates a plain object from a Binding message. Also converts values to other types if specified.
                 * @param message Binding
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.Binding, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Binding to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a PolicyDelta. */
            interface IPolicyDelta {

                /** PolicyDelta bindingDeltas */
                bindingDeltas?: (google.iam.v1.IBindingDelta[]|null);

                /** PolicyDelta auditConfigDeltas */
                auditConfigDeltas?: (google.iam.v1.IAuditConfigDelta[]|null);
            }

            /** Represents a PolicyDelta. */
            class PolicyDelta implements IPolicyDelta {

                /**
                 * Constructs a new PolicyDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IPolicyDelta);

                /** PolicyDelta bindingDeltas. */
                public bindingDeltas: google.iam.v1.IBindingDelta[];

                /** PolicyDelta auditConfigDeltas. */
                public auditConfigDeltas: google.iam.v1.IAuditConfigDelta[];

                /**
                 * Creates a new PolicyDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns PolicyDelta instance
                 */
                public static create(properties?: google.iam.v1.IPolicyDelta): google.iam.v1.PolicyDelta;

                /**
                 * Encodes the specified PolicyDelta message. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified PolicyDelta message, length delimited. Does not implicitly {@link google.iam.v1.PolicyDelta.verify|verify} messages.
                 * @param message PolicyDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IPolicyDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.PolicyDelta;

                /**
                 * Decodes a PolicyDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns PolicyDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.PolicyDelta;

                /**
                 * Verifies a PolicyDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a PolicyDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns PolicyDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.PolicyDelta;

                /**
                 * Creates a plain object from a PolicyDelta message. Also converts values to other types if specified.
                 * @param message PolicyDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.PolicyDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this PolicyDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a BindingDelta. */
            interface IBindingDelta {

                /** BindingDelta action */
                action?: (google.iam.v1.BindingDelta.Action|null);

                /** BindingDelta role */
                role?: (string|null);

                /** BindingDelta member */
                member?: (string|null);

                /** BindingDelta condition */
                condition?: (google.type.IExpr|null);
            }

            /** Represents a BindingDelta. */
            class BindingDelta implements IBindingDelta {

                /**
                 * Constructs a new BindingDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IBindingDelta);

                /** BindingDelta action. */
                public action: google.iam.v1.BindingDelta.Action;

                /** BindingDelta role. */
                public role: string;

                /** BindingDelta member. */
                public member: string;

                /** BindingDelta condition. */
                public condition?: (google.type.IExpr|null);

                /**
                 * Creates a new BindingDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns BindingDelta instance
                 */
                public static create(properties?: google.iam.v1.IBindingDelta): google.iam.v1.BindingDelta;

                /**
                 * Encodes the specified BindingDelta message. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified BindingDelta message, length delimited. Does not implicitly {@link google.iam.v1.BindingDelta.verify|verify} messages.
                 * @param message BindingDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IBindingDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.BindingDelta;

                /**
                 * Decodes a BindingDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns BindingDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.BindingDelta;

                /**
                 * Verifies a BindingDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a BindingDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns BindingDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.BindingDelta;

                /**
                 * Creates a plain object from a BindingDelta message. Also converts values to other types if specified.
                 * @param message BindingDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.BindingDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this BindingDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace BindingDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }

            /** Properties of an AuditConfigDelta. */
            interface IAuditConfigDelta {

                /** AuditConfigDelta action */
                action?: (google.iam.v1.AuditConfigDelta.Action|null);

                /** AuditConfigDelta service */
                service?: (string|null);

                /** AuditConfigDelta exemptedMember */
                exemptedMember?: (string|null);

                /** AuditConfigDelta logType */
                logType?: (string|null);
            }

            /** Represents an AuditConfigDelta. */
            class AuditConfigDelta implements IAuditConfigDelta {

                /**
                 * Constructs a new AuditConfigDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.iam.v1.IAuditConfigDelta);

                /** AuditConfigDelta action. */
                public action: google.iam.v1.AuditConfigDelta.Action;

                /** AuditConfigDelta service. */
                public service: string;

                /** AuditConfigDelta exemptedMember. */
                public exemptedMember: string;

                /** AuditConfigDelta logType. */
                public logType: string;

                /**
                 * Creates a new AuditConfigDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns AuditConfigDelta instance
                 */
                public static create(properties?: google.iam.v1.IAuditConfigDelta): google.iam.v1.AuditConfigDelta;

                /**
                 * Encodes the specified AuditConfigDelta message. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified AuditConfigDelta message, length delimited. Does not implicitly {@link google.iam.v1.AuditConfigDelta.verify|verify} messages.
                 * @param message AuditConfigDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.iam.v1.IAuditConfigDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.iam.v1.AuditConfigDelta;

                /**
                 * Decodes an AuditConfigDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns AuditConfigDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.iam.v1.AuditConfigDelta;

                /**
                 * Verifies an AuditConfigDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an AuditConfigDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns AuditConfigDelta
                 */
                public static fromObject(object: { [k: string]: any }): google.iam.v1.AuditConfigDelta;

                /**
                 * Creates a plain object from an AuditConfigDelta message. Also converts values to other types if specified.
                 * @param message AuditConfigDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.iam.v1.AuditConfigDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this AuditConfigDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace AuditConfigDelta {

                /** Action enum. */
                enum Action {
                    ACTION_UNSPECIFIED = 0,
                    ADD = 1,
                    REMOVE = 2
                }
            }
        }
    }

    /** Namespace type. */
    namespace type {

        /** Properties of an Expr. */
        interface IExpr {

            /** Expr expression */
            expression?: (string|null);

            /** Expr title */
            title?: (string|null);

            /** Expr description */
            description?: (string|null);

            /** Expr location */
            location?: (string|null);
        }

        /** Represents an Expr. */
        class Expr implements IExpr {

            /**
             * Constructs a new Expr.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.type.IExpr);

            /** Expr expression. */
            public expression: string;

            /** Expr title. */
            public title: string;

            /** Expr description. */
            public description: string;

            /** Expr location. */
            public location: string;

            /**
             * Creates a new Expr instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Expr instance
             */
            public static create(properties?: google.type.IExpr): google.type.Expr;

            /**
             * Encodes the specified Expr message. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Expr message, length delimited. Does not implicitly {@link google.type.Expr.verify|verify} messages.
             * @param message Expr message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.type.IExpr, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Expr message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.type.Expr;

            /**
             * Decodes an Expr message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Expr
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.type.Expr;

            /**
             * Verifies an Expr message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Expr message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Expr
             */
            public static fromObject(object: { [k: string]: any }): google.type.Expr;

            /**
             * Creates a plain object from an Expr message. Also converts values to other types if specified.
             * @param message Expr
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.type.Expr, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Expr to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace longrunning. */
    namespace longrunning {

        /** Represents an Operations */
        class Operations extends $protobuf.rpc.Service {

            /**
             * Constructs a new Operations service.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             */
            constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

            /**
             * Creates new Operations service using the specified rpc implementation.
             * @param rpcImpl RPC implementation
             * @param [requestDelimited=false] Whether requests are length-delimited
             * @param [responseDelimited=false] Whether responses are length-delimited
             * @returns RPC service. Useful where requests and/or responses are streamed.
             */
            public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Operations;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and ListOperationsResponse
             */
            public listOperations(request: google.longrunning.IListOperationsRequest, callback: google.longrunning.Operations.ListOperationsCallback): void;

            /**
             * Calls ListOperations.
             * @param request ListOperationsRequest message or plain object
             * @returns Promise
             */
            public listOperations(request: google.longrunning.IListOperationsRequest): Promise<google.longrunning.ListOperationsResponse>;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public getOperation(request: google.longrunning.IGetOperationRequest, callback: google.longrunning.Operations.GetOperationCallback): void;

            /**
             * Calls GetOperation.
             * @param request GetOperationRequest message or plain object
             * @returns Promise
             */
            public getOperation(request: google.longrunning.IGetOperationRequest): Promise<google.longrunning.Operation>;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest, callback: google.longrunning.Operations.DeleteOperationCallback): void;

            /**
             * Calls DeleteOperation.
             * @param request DeleteOperationRequest message or plain object
             * @returns Promise
             */
            public deleteOperation(request: google.longrunning.IDeleteOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Empty
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest, callback: google.longrunning.Operations.CancelOperationCallback): void;

            /**
             * Calls CancelOperation.
             * @param request CancelOperationRequest message or plain object
             * @returns Promise
             */
            public cancelOperation(request: google.longrunning.ICancelOperationRequest): Promise<google.protobuf.Empty>;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @param callback Node-style callback called with the error, if any, and Operation
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest, callback: google.longrunning.Operations.WaitOperationCallback): void;

            /**
             * Calls WaitOperation.
             * @param request WaitOperationRequest message or plain object
             * @returns Promise
             */
            public waitOperation(request: google.longrunning.IWaitOperationRequest): Promise<google.longrunning.Operation>;
        }

        namespace Operations {

            /**
             * Callback as used by {@link google.longrunning.Operations#listOperations}.
             * @param error Error, if any
             * @param [response] ListOperationsResponse
             */
            type ListOperationsCallback = (error: (Error|null), response?: google.longrunning.ListOperationsResponse) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#getOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type GetOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#deleteOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type DeleteOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#cancelOperation}.
             * @param error Error, if any
             * @param [response] Empty
             */
            type CancelOperationCallback = (error: (Error|null), response?: google.protobuf.Empty) => void;

            /**
             * Callback as used by {@link google.longrunning.Operations#waitOperation}.
             * @param error Error, if any
             * @param [response] Operation
             */
            type WaitOperationCallback = (error: (Error|null), response?: google.longrunning.Operation) => void;
        }

        /** Properties of an Operation. */
        interface IOperation {

            /** Operation name */
            name?: (string|null);

            /** Operation metadata */
            metadata?: (google.protobuf.IAny|null);

            /** Operation done */
            done?: (boolean|null);

            /** Operation error */
            error?: (google.rpc.IStatus|null);

            /** Operation response */
            response?: (google.protobuf.IAny|null);
        }

        /** Represents an Operation. */
        class Operation implements IOperation {

            /**
             * Constructs a new Operation.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperation);

            /** Operation name. */
            public name: string;

            /** Operation metadata. */
            public metadata?: (google.protobuf.IAny|null);

            /** Operation done. */
            public done: boolean;

            /** Operation error. */
            public error?: (google.rpc.IStatus|null);

            /** Operation response. */
            public response?: (google.protobuf.IAny|null);

            /** Operation result. */
            public result?: ("error"|"response");

            /**
             * Creates a new Operation instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Operation instance
             */
            public static create(properties?: google.longrunning.IOperation): google.longrunning.Operation;

            /**
             * Encodes the specified Operation message. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Operation message, length delimited. Does not implicitly {@link google.longrunning.Operation.verify|verify} messages.
             * @param message Operation message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperation, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Operation message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.Operation;

            /**
             * Decodes an Operation message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Operation
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.Operation;

            /**
             * Verifies an Operation message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Operation message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Operation
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.Operation;

            /**
             * Creates a plain object from an Operation message. Also converts values to other types if specified.
             * @param message Operation
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.Operation, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Operation to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a GetOperationRequest. */
        interface IGetOperationRequest {

            /** GetOperationRequest name */
            name?: (string|null);
        }

        /** Represents a GetOperationRequest. */
        class GetOperationRequest implements IGetOperationRequest {

            /**
             * Constructs a new GetOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IGetOperationRequest);

            /** GetOperationRequest name. */
            public name: string;

            /**
             * Creates a new GetOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GetOperationRequest instance
             */
            public static create(properties?: google.longrunning.IGetOperationRequest): google.longrunning.GetOperationRequest;

            /**
             * Encodes the specified GetOperationRequest message. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GetOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.GetOperationRequest.verify|verify} messages.
             * @param message GetOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IGetOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.GetOperationRequest;

            /**
             * Decodes a GetOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GetOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.GetOperationRequest;

            /**
             * Verifies a GetOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GetOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GetOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.GetOperationRequest;

            /**
             * Creates a plain object from a GetOperationRequest message. Also converts values to other types if specified.
             * @param message GetOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.GetOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GetOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsRequest. */
        interface IListOperationsRequest {

            /** ListOperationsRequest name */
            name?: (string|null);

            /** ListOperationsRequest filter */
            filter?: (string|null);

            /** ListOperationsRequest pageSize */
            pageSize?: (number|null);

            /** ListOperationsRequest pageToken */
            pageToken?: (string|null);
        }

        /** Represents a ListOperationsRequest. */
        class ListOperationsRequest implements IListOperationsRequest {

            /**
             * Constructs a new ListOperationsRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsRequest);

            /** ListOperationsRequest name. */
            public name: string;

            /** ListOperationsRequest filter. */
            public filter: string;

            /** ListOperationsRequest pageSize. */
            public pageSize: number;

            /** ListOperationsRequest pageToken. */
            public pageToken: string;

            /**
             * Creates a new ListOperationsRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsRequest instance
             */
            public static create(properties?: google.longrunning.IListOperationsRequest): google.longrunning.ListOperationsRequest;

            /**
             * Encodes the specified ListOperationsRequest message. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsRequest message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsRequest.verify|verify} messages.
             * @param message ListOperationsRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsRequest;

            /**
             * Decodes a ListOperationsRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsRequest;

            /**
             * Verifies a ListOperationsRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsRequest;

            /**
             * Creates a plain object from a ListOperationsRequest message. Also converts values to other types if specified.
             * @param message ListOperationsRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ListOperationsResponse. */
        interface IListOperationsResponse {

            /** ListOperationsResponse operations */
            operations?: (google.longrunning.IOperation[]|null);

            /** ListOperationsResponse nextPageToken */
            nextPageToken?: (string|null);
        }

        /** Represents a ListOperationsResponse. */
        class ListOperationsResponse implements IListOperationsResponse {

            /**
             * Constructs a new ListOperationsResponse.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IListOperationsResponse);

            /** ListOperationsResponse operations. */
            public operations: google.longrunning.IOperation[];

            /** ListOperationsResponse nextPageToken. */
            public nextPageToken: string;

            /**
             * Creates a new ListOperationsResponse instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ListOperationsResponse instance
             */
            public static create(properties?: google.longrunning.IListOperationsResponse): google.longrunning.ListOperationsResponse;

            /**
             * Encodes the specified ListOperationsResponse message. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ListOperationsResponse message, length delimited. Does not implicitly {@link google.longrunning.ListOperationsResponse.verify|verify} messages.
             * @param message ListOperationsResponse message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IListOperationsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.ListOperationsResponse;

            /**
             * Decodes a ListOperationsResponse message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ListOperationsResponse
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.ListOperationsResponse;

            /**
             * Verifies a ListOperationsResponse message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ListOperationsResponse message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ListOperationsResponse
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.ListOperationsResponse;

            /**
             * Creates a plain object from a ListOperationsResponse message. Also converts values to other types if specified.
             * @param message ListOperationsResponse
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.ListOperationsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ListOperationsResponse to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CancelOperationRequest. */
        interface ICancelOperationRequest {

            /** CancelOperationRequest name */
            name?: (string|null);
        }

        /** Represents a CancelOperationRequest. */
        class CancelOperationRequest implements ICancelOperationRequest {

            /**
             * Constructs a new CancelOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.ICancelOperationRequest);

            /** CancelOperationRequest name. */
            public name: string;

            /**
             * Creates a new CancelOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CancelOperationRequest instance
             */
            public static create(properties?: google.longrunning.ICancelOperationRequest): google.longrunning.CancelOperationRequest;

            /**
             * Encodes the specified CancelOperationRequest message. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CancelOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.CancelOperationRequest.verify|verify} messages.
             * @param message CancelOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.ICancelOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.CancelOperationRequest;

            /**
             * Decodes a CancelOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CancelOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.CancelOperationRequest;

            /**
             * Verifies a CancelOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CancelOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CancelOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.CancelOperationRequest;

            /**
             * Creates a plain object from a CancelOperationRequest message. Also converts values to other types if specified.
             * @param message CancelOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.CancelOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CancelOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DeleteOperationRequest. */
        interface IDeleteOperationRequest {

            /** DeleteOperationRequest name */
            name?: (string|null);
        }

        /** Represents a DeleteOperationRequest. */
        class DeleteOperationRequest implements IDeleteOperationRequest {

            /**
             * Constructs a new DeleteOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IDeleteOperationRequest);

            /** DeleteOperationRequest name. */
            public name: string;

            /**
             * Creates a new DeleteOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DeleteOperationRequest instance
             */
            public static create(properties?: google.longrunning.IDeleteOperationRequest): google.longrunning.DeleteOperationRequest;

            /**
             * Encodes the specified DeleteOperationRequest message. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DeleteOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.DeleteOperationRequest.verify|verify} messages.
             * @param message DeleteOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IDeleteOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.DeleteOperationRequest;

            /**
             * Decodes a DeleteOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DeleteOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.DeleteOperationRequest;

            /**
             * Verifies a DeleteOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DeleteOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DeleteOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.DeleteOperationRequest;

            /**
             * Creates a plain object from a DeleteOperationRequest message. Also converts values to other types if specified.
             * @param message DeleteOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.DeleteOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DeleteOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitOperationRequest. */
        interface IWaitOperationRequest {

            /** WaitOperationRequest name */
            name?: (string|null);

            /** WaitOperationRequest timeout */
            timeout?: (google.protobuf.IDuration|null);
        }

        /** Represents a WaitOperationRequest. */
        class WaitOperationRequest implements IWaitOperationRequest {

            /**
             * Constructs a new WaitOperationRequest.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IWaitOperationRequest);

            /** WaitOperationRequest name. */
            public name: string;

            /** WaitOperationRequest timeout. */
            public timeout?: (google.protobuf.IDuration|null);

            /**
             * Creates a new WaitOperationRequest instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitOperationRequest instance
             */
            public static create(properties?: google.longrunning.IWaitOperationRequest): google.longrunning.WaitOperationRequest;

            /**
             * Encodes the specified WaitOperationRequest message. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitOperationRequest message, length delimited. Does not implicitly {@link google.longrunning.WaitOperationRequest.verify|verify} messages.
             * @param message WaitOperationRequest message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IWaitOperationRequest, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.WaitOperationRequest;

            /**
             * Decodes a WaitOperationRequest message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitOperationRequest
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.WaitOperationRequest;

            /**
             * Verifies a WaitOperationRequest message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitOperationRequest message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitOperationRequest
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.WaitOperationRequest;

            /**
             * Creates a plain object from a WaitOperationRequest message. Also converts values to other types if specified.
             * @param message WaitOperationRequest
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.WaitOperationRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitOperationRequest to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an OperationInfo. */
        interface IOperationInfo {

            /** OperationInfo responseType */
            responseType?: (string|null);

            /** OperationInfo metadataType */
            metadataType?: (string|null);
        }

        /** Represents an OperationInfo. */
        class OperationInfo implements IOperationInfo {

            /**
             * Constructs a new OperationInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.longrunning.IOperationInfo);

            /** OperationInfo responseType. */
            public responseType: string;

            /** OperationInfo metadataType. */
            public metadataType: string;

            /**
             * Creates a new OperationInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OperationInfo instance
             */
            public static create(properties?: google.longrunning.IOperationInfo): google.longrunning.OperationInfo;

            /**
             * Encodes the specified OperationInfo message. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OperationInfo message, length delimited. Does not implicitly {@link google.longrunning.OperationInfo.verify|verify} messages.
             * @param message OperationInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.longrunning.IOperationInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.longrunning.OperationInfo;

            /**
             * Decodes an OperationInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OperationInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.longrunning.OperationInfo;

            /**
             * Verifies an OperationInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OperationInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OperationInfo
             */
            public static fromObject(object: { [k: string]: any }): google.longrunning.OperationInfo;

            /**
             * Creates a plain object from an OperationInfo message. Also converts values to other types if specified.
             * @param message OperationInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.longrunning.OperationInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OperationInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace rpc. */
    namespace rpc {

        /** Properties of a Status. */
        interface IStatus {

            /** Status code */
            code?: (number|null);

            /** Status message */
            message?: (string|null);

            /** Status details */
            details?: (google.protobuf.IAny[]|null);
        }

        /** Represents a Status. */
        class Status implements IStatus {

            /**
             * Constructs a new Status.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.rpc.IStatus);

            /** Status code. */
            public code: number;

            /** Status message. */
            public message: string;

            /** Status details. */
            public details: google.protobuf.IAny[];

            /**
             * Creates a new Status instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Status instance
             */
            public static create(properties?: google.rpc.IStatus): google.rpc.Status;

            /**
             * Encodes the specified Status message. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Status message, length delimited. Does not implicitly {@link google.rpc.Status.verify|verify} messages.
             * @param message Status message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.rpc.IStatus, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Status message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.rpc.Status;

            /**
             * Decodes a Status message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Status
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.rpc.Status;

            /**
             * Verifies a Status message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Status message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Status
             */
            public static fromObject(object: { [k: string]: any }): google.rpc.Status;

            /**
             * Creates a plain object from a Status message. Also converts values to other types if specified.
             * @param message Status
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.rpc.Status, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Status to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

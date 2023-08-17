import { Image, ImageBackground, Text, View, ScrollView, SafeAreaView, useWindowDimensions, Pressable, } from 'react-native'
import RenderHtml from 'react-native-render-html'
import Container from '../../Helper/Container'
import AppSettings from '../../../global/AppSettings'
import StaticText from '../../../global/StaticText'
import styles from './SoftwareLicenseStyle'
import BackBtn from '../../Helper/SvgImg/BackBtn'
import { SETTINGS } from '../../../constants/RouteNames'


const SoftwareLicense = ({
    data,
    onPress,
}) => {

    const { width } = useWindowDimensions()

    return (
        <Container style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.overlayWrap} source={AppSettings.background_inner_image}>
                <SafeAreaView style={styles.containerWrap}>
                    <View style={styles.topHeader}>
                        <Pressable
                            style={styles.titleHolder}
                            onPress={() => onPress(SETTINGS)}
                        >
                            <View style={styles.backWrap}>
                                <BackBtn />
                            </View>
                            <Text style={styles.pageHeading}>
                                {StaticText.screen.settings.tabs.software_license}
                            </Text>
                        </Pressable>
                    </View>
                    <ScrollView style={styles.serollWrap} keyboardShouldPersistTaps={'handled'} showsVerticalScrollIndicator={false}>

                        <Text style={styles.headerText}>{StaticText.screen.settings.tabs.software_license}</Text>
                        <Text style={styles.contentText}>
                            MIT License
                            {"\n"}   {"\n"}

                            Copyright (c) Meta Platforms, Inc. and affiliates.
                            {"\n"}   {"\n"}
                            Permission is hereby granted, free of charge, to any person obtaining a copy
                            of this software and associated documentation files (the "Software"), to deal
                            in the Software without restriction, including without limitation the rights
                            to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                            copies of the Software, and to permit persons to whom the Software is
                            furnished to do so, subject to the following conditions:
                            {"\n"}   {"\n"}
                            The above copyright notice and this permission notice shall be included in all
                            copies or substantial portions of the Software.
                            {"\n"}   {"\n"}
                            THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                            IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                            FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                            AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                            LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                            OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                            SOFTWARE.
                        </Text>
                        <Text style={styles.contentText}>
                            Apache-2.0 License
                            {"\n"}   {"\n"}
                            Copyright (c) 2016-present Invertase Limited & Contributors
                            {"\n"}   {"\n"}

                            Licensed under the Apache License, Version 2.0 (the "License");
                            you may not use this library except in compliance with the License.
                            {"\n"}   {"\n"}
                            You may obtain a copy of the Apache-2.0 License at
                            {"\n"}
                            http://www.apache.org/licenses/LICENSE-2.0
                            {"\n"}   {"\n"}
                            Unless required by applicable law or agreed to in writing, software
                            distributed under the License is distributed on an "AS IS" BASIS,
                            WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
                            See the License for the specific language governing permissions and
                            limitations under the License.
                            {"\n"}   {"\n"}
                            Creative Commons Attribution 3.0 License
                            {"\n"}   {"\n"}
                            Copyright (c) 2016-present Invertase Limited & Contributors
                            {"\n"}   {"\n"}
                            Documentation and other instructional materials provided for this project
                            (including on a separate documentation repository or it's documentation website) are
                            licensed under the Creative Commons Attribution 3.0 License. Code samples/blocks
                            contained therein are licensed under the Apache License, Version 2.0 (the "License"), as above.

                            You may obtain a copy of the Creative Commons Attribution 3.0 License at

                            https://creativecommons.org/licenses/by/3.0/
                        </Text>
                        <Text style={styles.contentText}>
                            npm License
                            {"\n"} {"\n"} 
                            Copyright (c) npm, Inc. and Contributors All rights reserved.
                            {"\n"} {"\n"} 
                            npm is released under the Artistic License 2.0, subject to additional terms that are listed below.
                            {"\n"} {"\n"} 
                            The text of the npm License follows and the text of the additional terms follows the Artistic License 2.0 terms:
                            {"\n"} {"\n"} 
                            The Artistic License 2.0

                            Copyright (c) 2000-2006, The Perl Foundation.
                            {"\n"} {"\n"} {"\n"} 
                            Everyone is permitted to copy and distribute verbatim copies of this license document, but changing it is not allowed.
                            {"\n"} {"\n"} 
                            Preamble
                            {"\n"} {"\n"} 
                            This license establishes the terms under which a given free software Package may be copied, modified, distributed, and/or redistributed. The intent is that the Copyright Holder maintains some artistic control over the development of that Package while still keeping the Package available as open source and free software.

                            You are always permitted to make arrangements wholly outside of this license directly with the Copyright Holder of a given Package. If the terms of this license do not permit the full use that you propose to make of the Package, you should contact the Copyright Holder and seek a different licensing arrangement.
                            {"\n"} {"\n"} 
                            Definitions
                            {"\n"} {"\n"} 

                            "Copyright Holder" means the individual(s) or organization(s)
                            named in the copyright notice for the entire Package.
                            "Contributor" means any party that has contributed code or other
                            material to the Package, in accordance with the Copyright Holder's
                            procedures.{"\n"} 
                            "You" and "your" means any person who would like to copy,
                            distribute, or modify the Package.{"\n"} 
                            "Package" means the collection of files distributed by the
                            Copyright Holder, and derivatives of that collection and/or of
                            those files. A given Package may consist of either the Standard
                            Version, or a Modified Version.{"\n"} 
                            "Distribute" means providing a copy of the Package or making it
                            accessible to anyone else, or in the case of a company or
                            organization, to others outside of your company or organization.
                            "Distributor Fee" means any fee that you charge for Distributing
                            this Package or providing support for this Package to another
                            party.  It does not mean licensing fees.{"\n"} 
                            "Standard Version" refers to the Package if it has not been
                            modified, or has been modified only in ways explicitly requested
                            by the Copyright Holder.{"\n"} 
                            "Modified Version" means the Package, if it has been changed, and
                            such changes were not explicitly requested by the Copyright
                            Holder.{"\n"} 
                            "Original License" means this Artistic License as Distributed with
                            the Standard Version of the Package, in its current version or as
                            it may be modified by The Perl Foundation in the future.{"\n"} 
                            "Source" form means the source code, documentation source, and
                            configuration files for the Package.{"\n"} 
                            "Compiled" form means the compiled bytecode, object code, binary,
                            or any other form resulting from mechanical transformation or
                            translation of the Source form.{"\n"} 
                            {"\n"} 
                            Permission for Use and Modification Without Distribution
                            {"\n"} {"\n"} 
                            (1) You are permitted to use the Standard Version and create and use Modified Versions for any purpose without restriction, provided that you do not Distribute the Modified Version.

                            Permissions for Redistribution of the Standard Version {"\n"} {"\n"} 

                            (2) You may Distribute verbatim copies of the Source form of the Standard Version of this Package in any medium without restriction, either gratis or for a Distributor Fee, provided that you duplicate all of the original copyright notices and associated disclaimers. At your discretion, such verbatim copies may or may not include a Compiled form of the Package.
                            {"\n"} {"\n"} 
                            (3) You may apply any bug fixes, portability changes, and other modifications made available from the Copyright Holder. The resulting Package will still be considered the Standard Version, and as such will be subject to the Original License.

                            Distribution of Modified Versions of the Package as Source {"\n"} {"\n"} 

                            (4) You may Distribute your Modified Version as Source (either gratis or for a Distributor Fee, and with or without a Compiled form of the Modified Version) provided that you clearly document how it differs from the Standard Version, including, but not limited to, documenting any non-standard features, executables, or modules, and provided that you do at least ONE of the following:
                            {"\n"} {"\n"} 

                            (a)  make the Modified Version available to the Copyright Holder
                            of the Standard Version, under the Original License, so that the
                            Copyright Holder may include your modifications in the Standard
                            Version.{"\n"} {"\n"} 
                            (b)  ensure that installation of your Modified Version does not
                            prevent the user installing or running the Standard Version. In
                            addition, the Modified Version must bear a name that is different
                            from the name of the Standard Version.{"\n"} {"\n"} 
                            (c)  allow anyone who receives a copy of the Modified Version to
                            make the Source form of the Modified Version available to others
                            under{"\n"} {"\n"} 
                            (i)  the Original License or{"\n"} {"\n"} 
                            (ii)  a license that permits the licensee to freely copy,
                            modify and redistribute the Modified Version using the same
                            licensing terms that apply to the copy that the licensee
                            received, and requires that the Source form of the Modified
                            Version, and of any works derived from it, be made freely
                            available in that license fees are prohibited but Distributor
                            Fees are allowed.
                            {"\n"} 
                            Distribution of Compiled Forms of the Standard Version or Modified Versions without the Source
                            {"\n"} {"\n"} 
                            (5) You may Distribute Compiled forms of the Standard Version without the Source, provided that you include complete instructions on how to get the Source of the Standard Version. Such instructions must be valid at the time of your distribution. If these instructions, at any time while you are carrying out such distribution, become invalid, you must provide new instructions on demand or cease further distribution. If you provide valid instructions or cease distribution within thirty days after you become aware that the instructions are invalid, then you do not forfeit any of your rights under this license.
                            {"\n"} {"\n"} 
                            (6) You may Distribute a Modified Version in Compiled form without the Source, provided that you comply with Section 4 with respect to the Source of the Modified Version.
                            
                            Aggregating or Linking the Package
                            {"\n"} {"\n"} 
                            (7) You may aggregate the Package (either the Standard Version or Modified Version) with other packages and Distribute the resulting aggregation provided that you do not charge a licensing fee for the Package. Distributor Fees are permitted, and licensing fees for other components in the aggregation are permitted. The terms of this license apply to the use and Distribution of the Standard or Modified Versions as included in the aggregation.
                            {"\n"} {"\n"} 
                            (8) You are permitted to link Modified and Standard Versions with other works, to embed the Package in a larger work of your own, or to build stand-alone binary or bytecode versions of applications that include the Package, and Distribute the result without restriction, provided the result does not expose a direct interface to the Package.

                            Items That are Not Considered Part of a Modified Version
                            {"\n"} {"\n"} 
                            (9) Works (including, but not limited to, modules and scripts) that merely extend or make use of the Package, do not, by themselves, cause the Package to be a Modified Version. In addition, such works are not considered parts of the Package itself, and are not subject to the terms of this license.
                            {"\n"} {"\n"} 
                            General Provisions
                            {"\n"} {"\n"} 
                            (10) Any use, modification, and distribution of the Standard or Modified Versions is governed by this Artistic License. By using, modifying or distributing the Package, you accept this license. Do not use, modify, or distribute the Package, if you do not accept this license.
                            {"\n"} {"\n"} 
                            (11) If your Modified Version has been derived from a Modified Version made by someone other than you, you are nevertheless required to ensure that your Modified Version complies with the requirements of this license.
                            {"\n"} {"\n"} 
                            (12) This license does not grant you the right to use any trademark, service mark, tradename, or logo of the Copyright Holder.
                            {"\n"} {"\n"} 
                            (13) This license includes the non-exclusive, worldwide, free-of-charge patent license to make, have made, use, offer to sell, sell, import and otherwise transfer the Package with respect to any patent claims licensable by the Copyright Holder that are necessarily infringed by the Package. If you institute patent litigation (including a cross-claim or counterclaim) against any party alleging that the Package constitutes direct or contributory patent infringement, then this Artistic License to you shall terminate on the date that such litigation is filed.
                            {"\n"} {"\n"} 
                            (14) Disclaimer of Warranty: THE PACKAGE IS PROVIDED BY THE COPYRIGHT HOLDER AND CONTRIBUTORS "AS IS' AND WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES. THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT ARE DISCLAIMED TO THE EXTENT PERMITTED BY YOUR LOCAL LAW. UNLESS REQUIRED BY LAW, NO COPYRIGHT HOLDER OR CONTRIBUTOR WILL BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES ARISING IN ANY WAY OUT OF THE USE OF THE PACKAGE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

                            The following additional terms shall apply to use of the npm software, the npm website, the npm repository and any other services or products offered by npm, Inc.:

                            "Node.js" trademark Joyent, Inc. npm is not officially part of the Node.js project, and is neither owned by nor affiliated with Joyent, Inc.

                            "npm" and "The npm Registry" are owned by npm, Inc. All rights reserved.{"\n"} {"\n"} 

                            Modules published on the npm registry are not officially endorsed by npm, Inc. or the Node.js project.{"\n"} {"\n"} 

                            Data published to the npm registry is not part of npm itself, and is the sole property of the publisher. While every effort is made to ensure accountability, there is absolutely no guarantee, warrantee, or assertion expressed or implied as to the quality, fitness for a specific purpose, or lack of malice in any given npm package. Packages downloaded through the npm registry are independently licensed and are not covered by this license.{"\n"} {"\n"} 

                            Additional policies relating to, and restrictions on use of, npm products and services are available on the npm website. All such policies and restrictions, as updated from time to time, are hereby incorporated into this license agreement. By using npm, you acknowledge your agreement to all such policies and restrictions.{"\n"} {"\n"} 

                            If you have a complaint about a package in the public npm registry, and cannot resolve it with the package owner, please contact support and explain the situation. See the npm Dispute Resolution policy for more details.{"\n"} {"\n"} 

                            Any data published to The npm Registry (including user account information) may be removed or modified at the sole discretion of the npm server administrators.{"\n"} {"\n"} 

                            "npm Logo" contributed by Mathias Pettersson and Brian Hammond, use is subject to https://docs.npmjs.com/trademark

                            "Gubblebum Blocky" font Copyright (c) by Tjarda Koster, https://jelloween.deviantart.com included for use in the npm website and documentation, used with permission.{"\n"} {"\n"} 

                            This program uses several Node modules contained in the node_modules/ subdirectory, according to the terms of their respective licenses.
                        </Text>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>
        </Container >
    )
}
export default SoftwareLicense
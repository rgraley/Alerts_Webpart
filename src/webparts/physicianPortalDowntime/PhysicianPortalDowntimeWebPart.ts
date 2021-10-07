import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './PhysicianPortalDowntimeWebPart.module.scss';
import * as strings from 'PhysicianPortalDowntimeWebPartStrings';

export interface IPhysicianPortalDowntimeWebPartProps {
  message: string;
  title: string;
  subTitle: string;
}

export default class PhysicianPortalDowntimeWebPart extends BaseClientSideWebPart<IPhysicianPortalDowntimeWebPartProps> {

  public render(): void {
    this.domElement.innerHTML = `
      <div class="${ styles.physicianPortalDowntime }">
        <div class="${ styles.container }">
          <div class="${ styles.row }">
            <div class="${ styles.column }">
                <span class="${ styles.title }">${escape(this.properties.title)}</span>
                <p class="${ styles.subTitle }">${escape(this.properties.subTitle)}</p>
                <p class="${ styles.description }">${escape(this.properties.message)}</p>
            </div>
          </div>
        </div>
      </div>`;
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('title',{
                  label: "Alert Title"
                }),
                PropertyPaneTextField('subTitle', {
                  label: "Alert SubTitle"
                }),
                PropertyPaneTextField('message', {
                  label: "Alert Message",
                  multiline: true
                })
              ]
            }
          ]
        }
      ]
    };
  }
}

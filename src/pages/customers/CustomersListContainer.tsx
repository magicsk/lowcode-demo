import React from 'react'
import { useCustomersQuery } from '../../generated/graphql'
import CustomersListView from './CustomersListView'
import {
  useFilter,
  useLocale,
  ErrorBoundary,
  QueryBoundary,
} from '@iteria-app/component-templates'
import { IntlProvider } from 'react-intl'
import { messages } from '../../locale'
const CustomersListContainer: React.FC = () => {
  const locale = useLocale()
  const messagesObject = messages(locale)
  const filterProps = useFilter()
  const [data] = useCustomersQuery({
    variables: {
      where: filterProps.filter,
      limit: filterProps.pageSize + filterProps.pageSize,
      offset: filterProps.offset,
      order_by: filterProps.sort,
    },
  })
  return (
    <ErrorBoundary>
      <QueryBoundary queryResponse={data}>
        <IntlProvider
          locale={locale}
          messages={messagesObject}
          onError={() => {}}
        >
          <CustomersListView
            data={data?.data}
            loading={data?.fetching}
            error={data?.error}
            {...filterProps}
          />
        </IntlProvider>
      </QueryBoundary>
    </ErrorBoundary>
  )
}
export default CustomersListContainer

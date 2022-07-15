import React, { useCallback, useEffect, useState } from 'react'
import { Translate } from '@iteria-app/component-templates'
import { useIntl } from 'react-intl'
import { useNavigate } from 'react-router-dom'
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridRowParams,
  GridSortModel,
  GridToolbarContainer,
  MuiEvent,
} from '@mui/x-data-grid'
import { Button, Grid, LinearProgress } from '@mui/material'
import {
  TablePagination,
  SelectPerPage,
  controlNextButton,
  controlSiblings,
  filterDataGrid,
  sortQueryFromGridData,
  IFilterState,
} from '@iteria-app/component-templates'
import { Add } from '@mui/icons-material'
export interface IFilterQuery {
  limit: number
  offset: number
  order_by: GridSortModel
}
export interface IOrdersTableProps {
  onClickRow?: (
    params: GridRowParams,
    event: MuiEvent<React.SyntheticEvent>,
    details?: any
  ) => void
  onChangeFilter?: (state: Partial<IFilterState>) => void
  data: any
  filter?: IFilterQuery
  onChangePage: (state: number) => void
  onPageSize: (state: number) => void
  onSort: (state: object) => void
  onFilter: (state: object | undefined) => void
  offset: number
  page: number
  pageSize: number
  countRows: number
  setCountToRows: (state: number) => void
  onDeleteRow?: (value: any) => void
  onClickCreate?: () => void
  loading: boolean
  error: any
}
const OrdersListView: React.FC<IOrdersTableProps> = (
  props: IOrdersTableProps
) => {
  const intl = useIntl()
  const navigate = useNavigate()
  const [siblingCount, setSiblingCount] = useState(1)
  const [hideNextButton, setHideNextButton] = useState(false)
  const {
    onChangePage,
    onPageSize,
    setCountToRows,
    countRows,
    pageSize,
    page,
    onFilter,
    onSort,
    loading,
    error,
  } = props
  useEffect(() => {
    if (!props?.data?.fetching) {
      controlNextButton({
        data: props?.data?.orders ?? [],
        countRows: countRows,
        hideNextButton: hideNextButton,
        setCountToRows: setCountToRows,
        setHideNextButton: setHideNextButton,
        page: page,
        pageSize: pageSize,
      })
      controlSiblings(
        props?.data?.orders ?? [],
        pageSize,
        page,
        setSiblingCount
      )
    }
  }, [props?.data?.orders])
  const columns: GridColDef[] = [
    {
      field: 'orders.orderDate',
      renderHeader: () => (
        <Translate
          entityName="orders"
          fieldName="orderDate"
          defaultMessage="OrderDate"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) =>
        params.row.orderDate ? intl.formatDate(params.row.orderDate) : '',
    },
    {
      field: 'orders.shippedDate',
      renderHeader: () => (
        <Translate
          entityName="orders"
          fieldName="shippedDate"
          defaultMessage="ShippedDate"
        />
      ),
      width: 150,
      renderCell: (params: GridCellParams) =>
        params.row.shippedDate ? intl.formatDate(params.row.shippedDate) : '',
    },
  ]
  const handlePage = (event: any, newPage: number) => {
    onChangePage(newPage)
  }
  const handlePageSize = (event: any) => {
    onPageSize(event.target.value)
    onChangePage(1)
  }
  const handleFilter = useCallback(
    (filter) => {
      onFilter(filterDataGrid(filter, columns))
      onChangePage(1)
    },
    [onFilter, handlePage]
  )
  const handleSort = (sort: GridSortModel) => {
    const tmp = sort.map((item) => {
      const splitted = item.field.split('.')
      splitted.shift()
      return {
        field: splitted.join('.'),
        sort: item.sort,
      }
    })
    onSort(sortQueryFromGridData(tmp))
  }
  return (
    <DataGrid
      rows={props?.data?.orders ?? []}
      columns={columns}
      loading={loading}
      hideFooterPagination
      autoHeight={true}
      error={error}
      sortingMode="server"
      filterMode="server"
      onSortModelChange={handleSort}
      onFilterModelChange={handleFilter}
      onRowClick={(props) => {
        return navigate(props.id.toString())
      }}
      components={{
        LoadingOverlay: LinearProgress,
        Toolbar: () => {
          return (
            <GridToolbarContainer>
              <Button
                startIcon={<Add />}
                color="primary"
                variant="contained"
                onClick={() => navigate('create')}
              >
                <Translate entityName="Create" />
              </Button>
            </GridToolbarContainer>
          )
        },
        Footer: () => (
          <Grid container>
            <TablePagination
              countRows={countRows}
              page={page}
              handlePage={handlePage}
              siblingCount={siblingCount}
              hideNextButton={hideNextButton}
            />
            <SelectPerPage
              pageSize={pageSize}
              handlePageSize={handlePageSize}
            />
          </Grid>
        ),
      }}
    />
  )
}
export default OrdersListView
